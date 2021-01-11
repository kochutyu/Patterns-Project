export const convertRouteStringToString = (route: string): string => {
  return route
    .split('/')
    .filter(v => !!v)
    .join('-')
    .split('-')
    .filter(v => !!v)
    .join(' ')
}
