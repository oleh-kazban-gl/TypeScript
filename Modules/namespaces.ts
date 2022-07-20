namespace Util {
  export const defaultServiceApi = '/api';
  export interface AppData {
    dataSet: Array<number>
  }
  export class Service { }
  export class Utility {
    public static doSmth(): void { }
  }
}

namespace GraphUtil {
  export const defaultColor = 'red';
  export interface GraphData {
    dataSet: Array<number>
  }
  export class Service { }
  export class Utility {
    public static doSmth(): void { }
  }
}

Util.Utility.doSmth();
const service = new Util.Service();

GraphUtil.Utility.doSmth();
const graphService = new GraphUtil.Service();
