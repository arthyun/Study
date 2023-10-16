import type { NextApiRequest, NextApiResponse } from "next";
// import db from "../../utils/database";

// interface responseData {
//    CONTENT: string;
//    CREATE_AT: string;
//    ID: number;
//    UPDATE_AT: string;
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method == "POST") {
      if (req.body.userId === "son" && req.body.userPass === "3316") {
         return res.status(200).json({ status: "POST_SUCCESS" });
      }
      // res.status(200).redirect(302, "/crop");
   }
}
