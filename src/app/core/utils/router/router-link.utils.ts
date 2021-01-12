export class URouterLink {

  public static convertRouteStringToString = (route: string): string => {
    return route
      .split('/')
      .filter(v => !!v)
      .join('-')
      .split('-')
      .filter(v => !!v)
      .join(' ')
  }

}

export const asLink = (route: string): string => {
  if (!route){
    return route;
  }

  return route
    .split('/')
    .filter(v => !!v)
    .join('-')
    .split('-')
    .filter(v => !!v)
    .join(' ');
}
