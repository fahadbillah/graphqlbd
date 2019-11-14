import { GraphQLScalarType } from 'graphql/type/definition';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
    name: `NumberBD`,
  
    description: `Bangladeshi number format e.g. 100,000,000.00`,
  
    serialize(value) {
      return value;
    },
  
    parseValue(value) {
      return value;
    },
  
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Can only validate strings as GUIDs but got a: ${ast.kind}`);
      }
  
      return ast.value;
    }
  });