# Angular 15

This is a sample Angular 15 application that tracks a conversion.

When using Angular 16+ use the SDK Gen 2 instead, this sample is for the older Gen1 SDK.

In an Angular app first install the Builder SDK.
Add builder:
`npm install @builder.io/sdk`

Where you want to track a conversion, add the following code:
```typescript
import { builder } from '@builder.io/sdk';

builder.init("your-public-api-key");
builder.trackConversion(20); // Where 20 is the amount
```

