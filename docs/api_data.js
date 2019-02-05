define({ "api": [  {    "type": "get",    "url": "/question/predefined/",    "title": "Get all the predefined questions.",    "name": "Predefined_questions",    "group": "Questions",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "q",            "description": "<p>number of questions to fetch.</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "predefined",            "description": "<p>questions fetched</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Question.js",    "groupTitle": "Questions"  },  {    "type": "get",    "url": "/survey/:id",    "title": "Get information about a specific survey.",    "name": "Get_a_specific_survey",    "group": "Surveys",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "page",            "description": "<p>the desired page with the survey</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "Surveys"  },  {    "type": "get",    "url": "/survey/:id/answers",    "title": "Get information about a specific survey and questions/answers.",    "name": "Get_a_specific_survey",    "group": "Surveys",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "page",            "description": "<p>the desired page with the survey</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "Surveys"  },  {    "type": "put",    "url": "/survey/:idSurvey/answer/:idAnswer",    "title": "Get all the surveys.",    "name": "Get_a_specific_survey",    "group": "Surveys",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "page",            "description": "<p>the desired page with the survey</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "Surveys"  },  {    "type": "post",    "url": "/surveys/validate/",    "title": "Save a new survey and notify users.",    "name": "Save_new_survey",    "group": "Surveys",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "author",            "description": "<p>id of the current user who is creating this survey.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "teams",            "description": "<p>Names of all the concerned teams.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "questions",            "description": "<p>list of all the questions object (title, description, place).</p>"          }        ]      }    },    "success": {      "fields": {        "204": [          {            "group": "204",            "type": "String",            "optional": false,            "field": "NoContent",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "Surveys"  },  {    "type": "get",    "url": "/surveys/",    "title": "Get all the surveys.",    "name": "Save_new_survey",    "group": "Surveys",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "page",            "description": "<p>Query param to indicate the desired page .</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "state",            "description": "<p>Query param to indicate the desired state (true=open/false=closed).</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "page",            "description": "<p>the desired page with surveys grouped by 9</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "Surveys"  },  {    "type": "put",    "url": "/survey/:idSurvey/answers",    "title": "Get all the surveys.",    "name": "update_results_of_a_survey",    "group": "Surveys",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "page",            "description": "<p>the desired page with the survey</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "Surveys"  },  {    "type": "post",    "url": "/user/subscribe",    "title": "User finishes its profile.",    "name": "Complete_sign_up",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>the new password to be defined.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>the firstName to be add.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>the lastName to be add.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>the token received by email.</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Mot",            "description": "<p>de passe trop court.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "Votre",            "description": "<p>mot de passe doit contenir au moins 1 chiffre.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "Identifiant",            "description": "<p>ou mot de passe temporaire incorrect.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400  Bad Request\n{\n      error: \"Identifiant ou mot de passe temporaire incorrect\",\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "app/controllers/User.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/user/:id/surveys/",    "title": "Get all the surveys that a user is related to.",    "name": "Get_related_surveys_for_a_specific_user",    "group": "User",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "Surveys",            "description": "<p>related surveys with basic infos (date, state, title..)</p>"          }        ]      }    },    "error": {      "fields": {        "400": [          {            "group": "400",            "type": "Number",            "optional": false,            "field": "404",            "description": "<p>No user have been found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/Survey.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/user/me/",    "title": "Get the current logged user's info",    "name": "Get_user_info",    "group": "User",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User data.</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>No connected user was not found.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/User.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/login",    "title": "User sign-in.",    "name": "Login_User",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>user email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>user password.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n     \"lastName\": \"Doe\",\n     \"firstName\": \"John\",\n     \"email\": \"j@doe.com\",\n     \"id\": \"0\",\n     \"team\": \"1\",\n     \"role\": \"0\"\n  },\n  \"Authorization\": xxxtokenxxx,\n  \"message\": \"Logged In Successfully\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "app/controllers/User.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/user/recover",    "title": "User changes its password.",    "name": "Recover_user_s_password",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>user email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>key received by email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>the new password.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "passwordVerif",            "description": "<p>check that password is really well defined.</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "204",            "description": ""          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Forbidden.",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/User.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/user/register",    "title": "Register users.",    "name": "Register_User",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String[]",            "optional": false,            "field": "email",            "description": "<p>users email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "team",            "description": "<p>the team that user will join.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "currentUserId",            "description": "<p>ID of the current user who register.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/User.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/user/reset",    "title": "User requests a new password.",    "name": "Request_a_new_password__token_sent_by_email_",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>user email.</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "204",            "description": ""          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Forbidden.",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "app/controllers/User.js",    "groupTitle": "User"  }] });
