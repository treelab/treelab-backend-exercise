import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

@Scalar('Any')
export class AnyScalar implements CustomScalar<any, any> {

    description: string = 'Object';
    parseValue(value: any) {
        Logger.log(value);
        return value;
    }
    serialize(value: any): any {
      Logger.log(value);
      return value;
    }
    parseLiteral(ast: any) {
       Logger.log(ast.value);
    }

}
