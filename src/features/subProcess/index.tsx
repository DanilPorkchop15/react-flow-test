import { memo, useEffect, useState } from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react';
import {EditableLabelInput, NodeWrapper} from "../../shared/ui";

type SubProcessNodeProps = NodeProps & {
  data: {
    field1?: {
      text?: string;
      label?: string;
    },
    field2?: {
      text?: string;
      label?: string;
    },
    field3?: {
      text?: string;
      label?: string;
    }
  };
};

export const SubProcessNode = memo(({ data }: SubProcessNodeProps) => {
  const field1Text = data?.field1?.text || 'Field 1';
  const field2Text = data?.field2?.text || 'Field 2';
  const field3Text = data?.field3?.text || 'Field 3';

  const field1Label = data?.field1?.label || 'Field 1';
  const field2Label = data?.field2?.label || 'Field 2';
  const field3Label = data?.field3?.label || 'Field 3';

  const [field1, setField1] = useState(field1Text);
  const [field2, setField2] = useState(field2Text);
  const [field3, setField3] = useState(field3Text);

  const [label1, setLabel1] = useState(field1Label);
  const [label2, setLabel2] = useState(field2Label);
  const [label3, setLabel3] = useState(field3Label);

  useEffect(() => {
    if (data.field1) {
      data.field1.text = field1;
      data.field1.label = label1;
    }
    if (data.field2) {
      data.field2.text = field2;
      data.field2.label = label2;
    }
    if (data.field3) {
      data.field3.text = field3;
      data.field3.label = label3;
    }
  }, [field1, field2, field3, label1, label2, label3, data]);

  return (
    <NodeWrapper>
      <div>
        <h3>Подпроцесс</h3>
        <EditableLabelInput
          label={label1}
          value={field1}
          onInputChange={setField1}
          onLabelChange={setLabel1}
        />
        <br />
        <EditableLabelInput
          label={label2}
          value={field2}
          onInputChange={setField2}
          onLabelChange={setLabel2}
        />
        <br />
        <EditableLabelInput
          label={label3}
          value={field3}
          onInputChange={setField3}
          onLabelChange={setLabel3}
        />
      </div>
      <Handle type="target" position={Position.Top} id="process" />
    </NodeWrapper>
  );
});