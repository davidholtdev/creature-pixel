export default defineNuxtRouteMiddleware((to, from) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });
});
