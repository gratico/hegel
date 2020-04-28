(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{1320:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return p}));t(17),t(4),t(3),t(1),t(12),t(11),t(22);var a=t(59),s=t(65);t(36);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/generic-types.mdx"}});var i={_frontmatter:r},l=s.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(a.b)(l,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"generic-types"},"Generic Types"),Object(a.b)("hr",null),Object(a.b)("p",null,"Sometimes you can have different types for the same logic. The easiest example of this case is ",Object(a.b)("inlineCode",{parentName:"p"},"identity")," function:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function identity(value) {\n  return value;\n}\n")),Object(a.b)("p",null,"If you try to annotate only types with which you currently use this function you will have multiple declaration of the same function:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function identityString(value: string): string {\n  return value;\n}\n\nfunction identityNumber(value: number): number {\n  return value;\n}\n\nfunction identityBoolean(value: boolean): boolean {\n  return value;\n}\n\n// Type of num is "number"\nlet num = identityNumber(2);\n\n// Type of str is "string"\nlet str = identityString("2");\n\n// Type of bool is "boolean"\nlet bool = identityBoolean(false);\n')),Object(a.b)("p",null,"As you can see, you need to redefine the ",Object(a.b)("inlineCode",{parentName:"p"},"identity")," function only for type safety. These functions do not add new business value to your code. You can try to solve this problem with ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/unknown-type"}),"Unknown Type"),", but you will lose the type of the return value."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function identity(value: unknown): unknown {\n  return value;\n}\n\n// Type of num is "unknown"\nlet num = identity(2);\n\n// Type of str is "unknown"\nlet str = identity("2");\n\n// Type of bool is "unknown"\nlet bool = identity(false);\n')),Object(a.b)("p",null,"And then Generic Types appear."),Object(a.b)("p",null,'Generic Types are the way to create something like a "type function". You can define "type arguments" which can be applied to this "type function" and a new type will be returned.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// "T" is type variable\nfunction identity<T>(value: T): T {\n  return value;\n}\n\n// T will be replaced by "number".\n// Type of num is "number"\nlet num = identity<number>(2);\n\n// T will be replaced by "string".\n// Type of str is "string"\nlet str = identity<string>("2");\n\n// T will be replaced by "boolean".\n// Type of bool is "boolean"\nlet bool = identity<boolean>(false);\n')),Object(a.b)("p",null,'And also, you can drop this "type application", because Hegel will infer which type you want to use.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// "T" is type variable\nfunction identity<T>(value: T): T {\n  return value;\n}\n\n// T will be replaced by type of 2.\n// Type of num is "number"\nlet num = identity(2);\n\n// T will be replaced by type of "2"\n// Type of str is "string"\nlet str = identity("2");\n\n// T will be replaced by type of false\n// Type of bool is "boolean"\nlet bool = identity(false);\n')),Object(a.b)("p",null,"Generics can be used within functions, function types, classes and type aliases."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Response<Body> = { status: 200, body: Body };\n\nfunction respondWith<Body>(body: Body): Response<Body> {\n  return { status: 200, body };\n}\n\n// Type of response1 is "Response<{ message: \'Good response\' }>"\n// is the same as "{ status: 200, body: { message: "Good response " } }"\nconst response1 = respondWith({ message: "Good response" });\n\n// Type of response2 is "Response<[1, 2, 3]>"\n// is the same as "{ status: 200, body: [1, 2, 3] }"\nconst response2 = respondWith([1, 2, 3]);\n\n// Type of bodyOfResponse2 is [1, 2, 3]"\nconst bodyOfResponse2 = response2.body;\n')),Object(a.b)("h2",{id:"generic-syntax"},"Generic Syntax"),Object(a.b)("p",null,"As was mentioned before, generics can be used within functions, function types, classes and type aliases.\nSo, there are different syntaxes in different places."),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("p",null,"To define generic parameters for a function you need to add a sequence of needed type variables wrapped in ",Object(a.b)("inlineCode",{parentName:"p"},"<")," ",Object(a.b)("inlineCode",{parentName:"p"},">")," (angle brackets) separated by ",Object(a.b)("inlineCode",{parentName:"p"},",")," (comma) before arguments list"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"// Function Declaration Generic Syntax\nfunction getResponseBodyAndStatus<Status, Body>(response: { status: Status, body: Body }): [Status, Body] {\n  return [response.status, response.body];\n}\n\n// Function Expression Generic Syntax\nconst getResponseBodyAndStatus = function<Status, Body>(response: { status: Status, body: Body }): [Status, Body] {\n  return [response.status, response.body];\n}\n\n// Arrow Function Expression Generic Syntax\nconst getResponseBodyAndStatus = <Status, Body>(response: { status: Status, body: Body }): [Status, Body] =>\n  [response.status, response.body];\n\nconst obj = {\n  // Method Generic Syntax\n  getResponseBodyAndStatus<Status, Body>(response: { status: Status, body: Body }): [Status, Body] {\n    return [response.status, response.body];\n  }\n}\n")),Object(a.b)("h3",{id:"function-type"},"Function Type"),Object(a.b)("p",null,'Function type has the same syntax as for "Arrow Function Expression" with generic: '),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"// Function Type Generic Syntax\nconst getResponseBodyAndStatus: <Status, Body>({\n  status: Status,\n  body: Body\n}) => [Status, Body] = function(response) {\n  return [response.status, response.body];\n};\n")),Object(a.b)("h3",{id:"classes"},"Classes"),Object(a.b)("p",null,"To define generic parameters for class you need to add sequence of needed type variables wrapped in ",Object(a.b)("inlineCode",{parentName:"p"},"<")," ",Object(a.b)("inlineCode",{parentName:"p"},">")," (angle brackets) separated by ",Object(a.b)("inlineCode",{parentName:"p"},",")," (comma) after class identifier"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Container<T> {\n  value: T;\n\n  constructor(value: T) {\n    this.value = value;\n  }\n}\n\nlet value = 2;\n\n// Explicit type application\n// container1 type is Container<number>\nconst container1 = new Container<number>(value);\n\n// Implicit type application\n// container2 type is Container<number>\nconst container2 = new Container(value);\n")),Object(a.b)("h3",{id:"type-alias"},"Type Alias"),Object(a.b)("p",null,"To define generic parameters for type aliases you need to add a sequence of needed type variables wrapped in ",Object(a.b)("inlineCode",{parentName:"p"},"<")," ",Object(a.b)("inlineCode",{parentName:"p"},">")," (angle brackets) separated by ",Object(a.b)("inlineCode",{parentName:"p"},",")," (comma) after type alias identifier."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"type Container<T> = { value: T }\n\nconst container: Container<number> = { value: 2 }\n")),Object(a.b)("h2",{id:"type-checking"},"Type Checking"),Object(a.b)("p",null,"First of all, if you defined some type as generic you can't use this type without type application."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'class Container<T> {\n  value: T;\n\n  constructor(value: T) {\n    this.value = value;\n  }\n}\n\nconst container1: Container<number> = new Container(2);  // 👌!\n\n// Error: Generic type "Container<T>" should be used with type paramteres!\nconst container2: Container = new Container(2);\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Container<T> = { value: T };\n\nconst container1: Container<number> = { value: 2 };  // 👌!\n\n// Error: Generic type "Container<T>" should be used with type paramteres!\nconst container2: Container = { value: 4 };\n')),Object(a.b)("p",null,'As you may understand, none value will be valid for "type variable". Only arguments which annotated as "type variable" will be a valid value for this type.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function getResponseBodyAndStatus<Status, Body>(\n  response: {\n    status: Status,\n    body: Body\n  }): [Status, Body] {\n\n  // Error: Type "[Status, \'Custom Body\']" is incompatible with type "[Status, Body]"\n  return [response.status, "Custom Body"];\n}\n')),Object(a.b)("p",null,"Also, the same as ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/unknown-type"}),"Unknown Type"),' you can\'t get properties from "type variable", because you can be replaced by "undefined", "null" or object which doesn\'t contain this property.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function length<T>(somethingWithLength: T) {\n\n  // Error: Property "length" does not exist in "T"\n  return somethingWithLength.length;\n}\n')),Object(a.b)("h2",{id:"constraints"},"Constraints"),Object(a.b)("p",null,'But sometimes you need to annotate that your "type variable" can be only subtype of some existed in Hegel type. In Hegel you can annotate this super type after ',Object(a.b)("inlineCode",{parentName:"p"},":")," (colon)."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function length<T: { length: number, ... }>(somethingWithLength: T) {\n  return somethingWithLength.length; // 👌!\n}\n\nlet result = 0;\n\nresult = length([1, 2, 3]);     // 👌!\nresult = length({ length: 4 }); // 👌!\nresult = length(() => 2);       // 👌!\n\n// Error: Parameter "Set<number>" is incompatible with restriction "{ length: number, ... }"\n// Because Set, WeakSet, Map and WeakMap has "size" property instead "length"\nresult = length(new Set<number>());\n')),Object(a.b)("p",null,"Also, it works for primitive types"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function plus<T: number | bigint>(a: T, b: T): T {\n  return a + b;\n}\n\nlet result: bigint | number = 0;\n\nresult = plus(1, 2);   // 👌!\nresult = plus(1n, 2n); // 👌!\n\n// Error: Parameter "\'1\'" is incompatible with restriction "bigint | number"\nresult = plus("1", "2");\n\n// Error: Type "2n" is incompatible with type "number"\nresult = plus(1, 2n);\n')),Object(a.b)("h2",{id:"default-type"},"Default Type"),Object(a.b)("p",null,'You can also provide defaults for "type variable" the same as for a function argument.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Container<T = unknown> = { value: T }\n\n// container type is "Container<unknown>"\nconst container: Container<> = { value: "something" }\n')))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/generic-types.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-generic-types-mdx-6e8017f3b586ead76e01.js.map