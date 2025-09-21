import { CodeEditor } from '@/components/ui/code';
import { Code } from 'lucide-react';
export const CodeEditorDemo = () => {
  return (
    <CodeEditor
      cursor
      className="w-[640px] h-[480px]"
      lang="tsx"
      title="component.tsx"
      icon={<Code />}
      duration={15}
      delay={0.5}
      copyButton
    >
      {`saya belajar`}
    </CodeEditor>
  );
};
export default CodeEditorDemo;
