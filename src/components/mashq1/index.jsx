import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Todo() {
  let [title, setTitle] = useState("");
  let [more, setMore] = useState("");
  function getApi() {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  }

  let { data, isError, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: getApi,
    refetchInterval: 300000,
  });

  console.log(data);

  function postApi(newuser) {
    return axios.post("https://jsonplaceholder.typicode.com/todo", newuser);
  }
  let obj = {
    userId:Date.now(),
    id: Date.now(),
    title: title,
    completed: false,
  };
  const { mutate } = useMutation({
    mutationFn: postApi(title),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
    onError(error) {
      console.log("Got error from backend", error);
    },
  });

  function post(e) {
    e.preventDefault();
    mutate();
  }
  
  function removee(id) {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
  }
  return (
    <>
      <form className="container mx-auto w-[800px] mb-7 border border-gray-300 p-5 rounded-lg shadow-lg bg-white">
        <input
          type="text"
          className="border w-full p-2 rounded-md"
          placeholder="Title"
        />
        <input
          type="text"
          className="border w-full mt-4 p-2 rounded-md"
          placeholder="Title mazmuni"
        />
        <button
          onClick={post}
          className="cursor-pointer mt-4 w-full bg-blue-600 text-white py-2 rounded-md transition duration-300"
        >
          Post
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      <div className="flex container mx-auto w-[1200px] flex-wrap gap-9">
        {data?.data.length > 0 &&
          data.data.map((value) => {
            return (
              <div className="w-full border flex justify-between p-1 rounded-md">
                <p>{value.title}</p>
                <button
                  onClick={() => {
                    removee(value.id);
                  }}
                  className="cursor-pointer border rounded-md p-0.5"
                >
                  remove
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
