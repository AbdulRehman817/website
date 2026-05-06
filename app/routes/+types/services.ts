
export namespace Route {
  export interface MetaArgs {
    params: Record<string, string | undefined>;
    location: Location;
    data: loader.Data | undefined;
    error?: Error;
  }

  export namespace Meta {
    export type MetaDescriptor = 
      | { title: string }
      | { name: string; content: string }
      | { property: string; content: string };
  }

  export interface LoaderArgs {
    request: Request;
    params: Record<string, string | undefined>;
  }

  export namespace loader {
    export type Data = any;
  }
}