import { GradientPage } from "../components";

export default function Home() {
  const imageUrl =
    "https://images.unsplash.com/photo-1612833609248-5b7bce5b9b0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <GradientPage
      color="red"
      image={imageUrl}
      subtitle="subtitle"
      title="title"
      description="description"
      roundImage={true}
    >
      <div>content</div>
    </GradientPage>
  );
}
