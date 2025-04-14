import { getColorByTag } from "helpers/getColorByTag";

// We can create an interface for the props
// This will help in type-checking and make the component more reusable
interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  // Don't render anything if tag is empty
  if (!tag) return null;    

  const color: string = getColorByTag(tag); // added type to be easier to read
  return (
    <div
      className={`rounded inline-flex text-white px-2`}
      style={{
        backgroundColor: color,
      }}
    >
      {tag}
    </div>
  );
}
