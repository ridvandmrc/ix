<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/select-editable.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import React from 'react';

export const SelectEditable: React.FC = () => {
  return (
    <IxSelect selectedIndices={'1'} editable>
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
```