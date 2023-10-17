import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/database";

// interface responseData {
//   CONTENT: string;
//   CREATE_AT: string;
//   ID: number;
//   UPDATE_AT: string;
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method == "POST") {
      // console.log("찔렸음");
      console.log(req.body);
      // db.query("select * from memos", function (error: string, results: responseData, fields: unknown) {
      //   if (error) {
      //     console.error(error);
      //   }
      //   // console.log(results, fields);
      //   res.status(200).json(results);
      // });
      // return db.end();
      // return res.status(200).json("성공");
   }
}
