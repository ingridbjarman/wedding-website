'use client';
import React from "react";
import Image from "next/image";
import Monogram from "../../img/monogram.png"
import { useSearchParams } from "next/navigation";

const PasswordProtectPage = () => {
  const search = useSearchParams();
  const error = search?.get("error");

  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-12">
          <Image
            src={Monogram}
            alt="monogram"
            width={250}
            height={250}
          />
          <form action="/api/password" method="post" className="w-full">
            <div className="form-control flex flex-col gap-2 items-center">
              {error && (
                <label className="label">
                  <span className="label-text text-error font-montserrat font-extralight">{error}</span>
                </label>
              )}
              <div className="input-group border p-2 rounded-lg flex justify-between">
                <input
                  type="text"
                  name="password"
                  className="input input-bordered font-montserrat font-extralight"
                  placeholder="Password"
                />
                <button className="btn font-montserrat font-extralight">Enter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PasswordProtectPage;
