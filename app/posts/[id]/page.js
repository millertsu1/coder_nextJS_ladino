import Image from "next/image";

const getPostById = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("No pudimos obtener el post");
  }

  return response.json();
};

const postDetail = async ({ params }) => {
  const { id } = params

  const post = await getPostById(id)

  return (
    <div className="container w-auto max-w-md">
      <h2 className="text-2xl flex items-center justify-between">{post.title} <span className="text-xs px-4 bg-blue-600 text-slate-50">{post.category}</span> </h2>
      <hr />
      <Image
                className="mx-auto w-20 mt-10"
                width={100}
                height={50}
                src={post.image}
                alt={post.title}/>
      <p>{post.description} </p>
    </div>
  );
};

export default postDetail;
