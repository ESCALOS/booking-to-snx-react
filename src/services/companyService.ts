interface CompanyApiResponse {
  data: {
    id: number;
    ruc: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
  success: boolean;
}

interface CompanyCache {
  [companyName: string]: string; // Solo guardamos el RUC
}

const CACHE_KEY = "company_ruc_cache";

// Función para obtener el caché del localStorage
function getCache(): CompanyCache {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch (error) {
    console.warn("Error reading cache from localStorage:", error);
    return {};
  }
}

// Función para guardar en el caché
function saveToCache(companyName: string, ruc: string): void {
  try {
    const cache = getCache();
    cache[companyName.toLowerCase().trim()] = ruc;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.warn("Error saving to cache:", error);
  }
}

// Función para obtener del caché
function getFromCache(companyName: string): string | null {
  try {
    const cache = getCache();
    const key = companyName.toLowerCase().trim();
    return cache[key] || null;
  } catch (error) {
    console.warn("Error reading from cache:", error);
    return null;
  }
}

// Función para verificar si un string es RUC (11 dígitos)
export function isRuc(value: string): boolean {
  return /^\d{11}$/.test(value.trim());
}

// Función para obtener RUC por nombre de empresa con caché permanente
export async function getRucByCompanyName(
  companyName: string
): Promise<string | null> {
  if (!companyName?.trim()) {
    return null;
  }

  const trimmedName = companyName.trim();

  // Si ya es un RUC, retornarlo directamente
  if (isRuc(trimmedName)) {
    return trimmedName;
  }

  // Verificar caché primero
  const cachedRuc = getFromCache(trimmedName);
  if (cachedRuc) {
    console.log(`RUC found in cache for: ${trimmedName}`);
    return cachedRuc;
  }

  // Consultar API si no está en caché
  try {
    console.log(`Fetching RUC from API for: ${trimmedName}`);
    const response = await fetch(
      "https://apir-ruc-lrv12-main-isytkh.laravel.cloud/api/companies/search/name",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: trimmedName }),
      }
    );

    if (response.ok) {
      const result: CompanyApiResponse = await response.json();
      if (result.success && result.data?.ruc) {
        // Guardar permanentemente en caché
        saveToCache(trimmedName, result.data.ruc);
        console.log(`RUC cached for: ${trimmedName} -> ${result.data.ruc}`);
        return result.data.ruc;
      }
    }

    console.warn(`No RUC found for company: ${trimmedName}`);
    return null;
  } catch (error) {
    console.error(`Error fetching RUC for company "${trimmedName}":`, error);
    return null;
  }
}

// Función para ver todas las empresas en caché (útil para debug)
export function getCachedCompanies(): CompanyCache {
  return getCache();
}

// Función para limpiar todo el caché (solo si es necesario para desarrollo)
export function clearCompanyCache(): void {
  try {
    localStorage.removeItem(CACHE_KEY);
    console.log("Company cache cleared");
  } catch (error) {
    console.warn("Error clearing cache:", error);
  }
}
