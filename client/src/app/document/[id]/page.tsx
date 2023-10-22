import React, { useEffect } from "react";

type Props = { params: { id: string } };

const DocumentPage = async ({ params }: Props) => {
  const res = await fetch(`http://localhost:5000/api/v1/document/${params.id}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI0YmY4YTEwMzA2MjY1YzU4ZWVhMCIsIm5hbWUiOiJ0ZXN0IHVzZXIgMCIsImlhdCI6MTY5Nzc5NTA2NCwiZXhwIjoxNzAwMzg3MDY0fQ.7zbhZBndkYOHLpvSBdG7puYWxikigzTZH3LOj8VQvUs",
    },
    cache: "no-cache",
  });
  const data = await res.json();
  if (res.status == 404) throw new Error(data.msg);
  console.log(data.doc);
  return (
    <div>
      DocumentPage {data.doc.title} {data.doc.ownedBy}
    </div>
  );
};

export default DocumentPage;
