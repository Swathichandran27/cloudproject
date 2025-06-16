import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId:"us-east-2_wLj3cnCPO",
    ClientId:"40d96ljshi4m6m2vmn5q9k33jv"
}
export default new CognitoUserPool(poolData);