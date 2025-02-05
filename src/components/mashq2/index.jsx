import React from "react";
// import  useUserStore  from "../../store/appStore";
function User() {
    // function add() {
    //     add()
    // }
  return (
    <div>
      <form className="container mx-auto w-[800px] border p-3 rounded-md">
        <input
          className="w-full border rounded-md p-1.5"
          type="text"
          placeholder="name"
        />
        <input
          className="w-full border rounded-md p-1.5 mt-3"
          type="text"
          placeholder="img url"
        />
        <button className="w-[40%] rounded-md border flex justify-center ml-36 mt-3.5 cursor-pointer">
          edit
        </button>
      </form>
      <div className="border flex w-[800px] mx-auto mt-2 p-3.5 rounded-md">
        <img
          className="w-[50%] rounded-md"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
        <div>name:</div>
      </div>
    </div>
  );
}

export default User;
