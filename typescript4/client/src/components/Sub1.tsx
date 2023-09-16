import React, { Fragment } from "react";

interface IProps {
  data: {
    birthday: string;
    gender: string;
    id: number;
    image: string;
    job: string;
    name: string;
  }[];
}

const Sub1: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <Fragment key={item.id}>
            <img
              src={item.image}
              alt={item.name}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Sub1;
