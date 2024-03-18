import { NextRequest, NextResponse } from "next/server";

export const validateUserAuth = (request: NextRequest) => {
  //Your validations here...
  console.log("request object inside middleware validateUserAuth = ", request);
  //Use the NextResponse for the actions you require
  //https://nextjs.org/docs/app/api-reference/functions/next-response
  return NextResponse.next();
};

export default validateUserAuth;
export const config = {
  //here you define the routes that is going to cover this middleware
  //this recives regex values
  //https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/tasks"],
};
