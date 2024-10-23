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
    }
  };
};

export const ProcessNode = memo(({ data }: SubProcessNodeProps) => {
  const field1Text = data?.field1?.text || 'Field 1';
  const field2Text = data?.field2?.text || 'Field 2';

  const field1Label = data?.field1?.label || 'Field 1';
  const field2Label = data?.field2?.label || 'Field 2';

  const [field1, setField1] = useState(field1Text);
  const [field2, setField2] = useState(field2Text);

  const [label1, setLabel1] = useState(field1Label);
  const [label2, setLabel2] = useState(field2Label);

  useEffect(() => {
    if (data.field1) {
      data.field1.text = field1;
      data.field1.label = label1;
    }
    if (data.field2) {
      data.field2.text = field2;
      data.field2.label = label2;
    }
  }, [field1, field2,  label1, label2, data]);

  return (
    <NodeWrapper>
      <div>
        <h3>Процесс</h3>
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
      </div>
      <Handle type="source" position={Position.Bottom} id="process" />
    </NodeWrapper>
  );
});