export class CookieManagementService {
  // private cookieCategoryMap: { [key: string]: string } = {
  //   'NID': 'marketing',
  //   'SOCS': 'preferences',
  //   'AED': 'analytics',
  //   // 'usprivacy': 'preferences', // Include this cookie
  //   // Add more cookies as needed
  // };

  // getAllCookies(): { name: string, category: string }[] {
  //   const allCookies = document.cookie.split(';').map(cookie => cookie.trim());
  //   return allCookies.map(cookie => {
  //     const [name] = cookie.split('=');
  //     const category = this.cookieCategoryMap[name.trim()] || 'unknown';
  //     return { name: name.trim(), category };
  //   });
  // }

  // blockCookiesByCategory(category: string) {
  //   const cookiesToBlock = Object.entries(this.cookieCategoryMap)
  //     .filter(([_, cat]) => cat === category)
  //     .map(([name]) => name);
  
  //   cookiesToBlock.forEach(cookieName => {
  //     console.log(`Attempting to delete cookie: ${cookieName}`);
  //     this.deleteCookie(cookieName);
  //   });
  // }

  // deleteCookie(name: string) {
  //   // Attempt to delete cookie with path and domain
  //   document.cookie = `${name}=; Max-Age=0; path=/; domain=code-brothers.eu`;
  // }

  // deleteAllCookies() {
  //   const allCookies = this.getAllCookies();
  //   allCookies.forEach(cookie => {
  //     this.deleteCookie(cookie.name);
  //     console.log(`Deleted cookie: ${cookie.name}`);
  //   });
  // }
}
