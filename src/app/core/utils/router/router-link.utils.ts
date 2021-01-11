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
