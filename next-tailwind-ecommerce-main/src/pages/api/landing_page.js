// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAll } from "../../../Services/helper_fun_landing";
import * as landing from "public/static/data/landing.json";

export default function handler(req, res) {
  if(req.method === "GET")
  {
    getAll();
    return res.status(200).json(landing);
  }
  return res.status(400).send();
}
