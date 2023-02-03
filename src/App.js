import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountry } from "./redux/agent/agentSlice";
import Header from "./component/Header";

const App = () => {
  //

  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry());
  });

  return (
    <div>
      <Header />
      <div className="flex flex-row flex-wrap justify-center items-center ">
        {country.map((count, index) => (
          <div key={index}>
            <div className="card w-96 bg-base-100 shadow-2xl mx-5 my-5">
              <figure>
                <img src={count.bustPortrait} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {count.displayName}
                  <div className="badge badge-primary">
                    {count.developerName}
                  </div>
                </h2>
                <p>{count.description}</p>
                <div className="card-actions justify-end">
                  <div className="ability">
                    {count.abilities.map((ability, idx) => (
                      <div className="badge badge-primary mx-2">
                        <p>ds{ability.displayName}ds</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
