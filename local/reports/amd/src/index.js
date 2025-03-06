// // File: local/reports/amd/src/index.js
// define(['jquery'], function($) {
//     return {
//         init: function() {
//             index.dom.main = $(document).find("#report-container");
//             index.dom.addSendingProfile = index.dom.main.find(".add_sending_profile");

//             console.log('local_reports/index module initialized.');
//         }
//     };
// });

define([
    "jquery",
    "core/ajax",
  ], function(
    $,
    ajax,
  ) {
      var index = {
          dom: {
              main: null,
              submit: null,
          },

        //   langs: {
        //       somethingWentWrong: null,
        //       clickHereToDelete: null,
        //       clickHereToEdit: null,
        //       sendingProfileAdded: null,
        //       sendingProfileupadate: null,
        //       deletesendingProfile: null,
        //       areYouSure: null,
        //       yes: null,
        //       no: null,
        //       SendingProfiledeleted: null,
        //       clickHereTosendTestMail: null,
        //       mailSent: null,
        //       unableToSendMail: null,
        //   },

        //   variables: {
        //       dataTableReference: null,
        //       type: null,
        //       currentIdValues: null,
        //       sendMailId: null,
        //   },

          actions: {
              getString: function() {
                index.init();
                //   index.variables.type = type;
                //   str.get_strings([
                    //   {
                    //       key: "something_went_wrong",
                    //       component: "local_micro_learning"
                    //   },
                    //   {
                    //       key: "click_here_to_delete",
                    //       component: "local_micro_learning"
                    //   },
                    //   {
                    //       key: "click_here_to_edit",
                    //       component: "local_micro_learning"
                    //   },
                    //   {
                    //       key: "smtp_added",
                    //       component: "local_micro_learning"
                    //   },
                    //   {
                    //       key: "smtp_updated",
                    //       component: "local_micro_learning",
                    //   },
                    //   {
                    //       key: "delete_smtp",
                    //       component: "local_micro_learning",
                    //   },
                    //   {
                    //       key: "are_you_sure",
                    //       component: "local_micro_learning"
                    //   },
                    //   {
                    //       key: "yes"
                    //   },
                    //   {
                    //       key: "no",
                    //       component: "local_micro_learning"
                    //   },
                    //   {
                    //       key: "smtp_deleted",
                    //       component: "local_micro_learning",
                    //   },
                    //   {
                    //       key: "click_here_to_send_test_mail",
                    //       component: "local_micro_learning",
                    //   },
                    //   {
                    //       key: "mail_sent",
                    //       component: "local_micro_learning",
                    //   },
                    //   {
                    //       key: "unable_to_send_mail",
                    //       component: "local_micro_learning",
                    //   },
                //   ]).done(function(s) {
                    //   index.langs.somethingWentWrong = s[0];
                    //   index.langs.clickHereToDelete = s[1];
                    //   index.langs.clickHereToEdit = s[2];
                    //   index.langs.sendingProfileAdded = s[3];
                    //   index.langs.sendingProfileupadate = s[4];
                    //   index.langs.deletesendingProfile = s[5];
                    //   index.langs.areYouSure = s[6];
                    //   index.langs.yes = s[7];
                    //   index.langs.no = s[8];
                    //   index.langs.SendingProfiledeleted = s[9];
                    //   index.langs.clickHereTosendTestMail = s[10];
                    //   index.langs.mailSent = s[11];
                    //   index.langs.unableToSendMail = s[12];

                //       index.init();
                //   });
              },

            //   validation: function(sendMail = false) {
            //       var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            //       var regex = /^[0-9]+$/;

            //       index.dom.name = $(document).find("#profilename");
            //       index.dom.from = $(document).find("#profilefrom");
            //       index.dom.host = $(document).find("#host");
            //       index.dom.username = $(document).find("#username");
            //       index.dom.password = $(document).find("#password");
            //       index.dom.sendMailTo = $(document).find("#testmailto");
            //       index.dom.sMTPSecure = $(document).find("#smtpsecure");
            //       index.dom.port = $(document).find("#port");

            //       if (index.dom.name.val().trim() == "") {
            //           index.dom.name.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.name.removeClass("is-invalid");
            //       }

            //       if (index.dom.from.val().trim() == "") {
            //           index.dom.from.val("").addClass("is-invalid");
            //           return false;
            //       } else if (
            //           !emailPattern.test(index.dom.from.val().trim())
            //       ) {
            //           index.dom.from.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.from.removeClass("is-invalid");
            //       }

            //       if (index.dom.host.val().trim() == "") {
            //           index.dom.host.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.host.removeClass("is-invalid");
            //       }

            //       if (index.dom.username.val() == "") {
            //           index.dom.username.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.username.removeClass("is-invalid");
            //       }

            //       if (sendMail) {
            //           if (index.dom.sendMailTo.val() == "") {
            //               index.dom.sendMailTo.val("").addClass("is-invalid");
            //               return false;
            //           } else if (!emailPattern.test(index.dom.sendMailTo.val().trim())) {
            //               index.dom.sendMailTo.val("").addClass("is-invalid");
            //               return false;
            //           } else {
            //               index.dom.sendMailTo.removeClass("is-invalid");
            //           }
            //       }

            //       if (index.dom.password.val().trim() == "") {
            //           index.dom.password.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.password.removeClass("is-invalid");
            //       }

            //       if (index.dom.sMTPSecure.val().trim() == "") {
            //           index.dom.sMTPSecure.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.sMTPSecure.removeClass("is-invalid");
            //       }

            //       if (index.dom.port.val().trim() == "") {
            //           index.dom.port.val("").addClass("is-invalid");
            //           return false;
            //       } else if (!regex.test(index.dom.port.val().trim())) {
            //           index.dom.port.val("").addClass("is-invalid");
            //           return false;
            //       } else {
            //           index.dom.port.removeClass("is-invalid");
            //           return true;
            //       }
            //   },

            //   editSendingProfile: function(modal, e) {
            //       var promises = ajax.call([
            //           {
            //               methodname: "local_micro_learning_manage_smtp",
            //               args: {
            //                   name: index.dom.name.val(),
            //                   from: index.dom.from.val(),
            //                   host: index.dom.host.val(),
            //                   username: index.dom.username.val(),
            //                   password: index.dom.password.val(),
            //                   smtpsecure: index.dom.sMTPSecure.val().trim(),
            //                   port: index.dom.port.val(),
            //                   id: $(e.currentTarget).attr("data-edit"),
            //                   type: index.variables.type,
            //               },
            //           },
            //       ]);
            //       promises[0].done(function() {
            //           modal.hide();
            //           modal.destroy();
            //           notification.addNotification({
            //               message: index.langs.sendingProfileupadate,
            //               type: "success",
            //           });
            //           index.variables.dataTableReference.draw();
            //       }).fail(function() {
            //           notification.addNotification({
            //               message: index.langs.somethingWentWrong,
            //               type: "error",
            //           });
            //       });
            //   },

            //   addSendingProfile: function(modal) {
            //       var promises = ajax.call([
            //           {
            //               methodname: "local_micro_learning_manage_smtp",
            //               args: {
            //                   name: index.dom.name.val(),
            //                   from: index.dom.from.val(),
            //                   host: index.dom.host.val(),
            //                   username: index.dom.username.val(),
            //                   password: index.dom.password.val(),
            //                   smtpsecure: index.dom.sMTPSecure.val().trim(),
            //                   port: index.dom.port.val(),
            //                   type: index.variables.type,
            //               },
            //           },
            //       ]);
            //       promises[0].done(function() {
            //           modal.hide();
            //           modal.destroy();
            //           notification.addNotification({
            //               message: index.langs.sendingProfileAdded,
            //               type: "success",
            //           });
            //           index.variables.dataTableReference.draw();
            //       }).fail(function() {
            //           notification.addNotification({
            //               message: index.langs.somethingWentWrong,
            //               type: "error",
            //           });
            //       });
            //   },

            //   sendTestMail: function(modal) {
            //       stLoader.showLoader();
            //       var promises = ajax.call([
            //       {
            //           methodname: "local_micro_learning_send_test_mail",
            //               args: {
            //                   name: index.dom.name.val(),
            //                   from: index.dom.from.val(),
            //                   host: index.dom.host.val(),
            //                   username: index.dom.username.val(),
            //                   password: index.dom.password.val(),
            //                   sendMailTo: index.dom.sendMailTo.val(),
            //                   smtpsecure: index.dom.sMTPSecure.val().trim(),
            //                   port: index.dom.port.val(),
            //               },
            //           },
            //       ]);
            //       promises[0].done(function(response) {
            //           stLoader.hideLoader();
            //           if (response === false) {
            //               $('.invalid_sending_profile_alert').removeClass('d-none');
            //           } else {
            //               $('.mail_sent_alert').removeClass('d-none');
            //           }
            //       }).fail(function() {
            //           stLoader.hideLoader();
            //           modal.hide();
            //           modal.destroy();
            //           notification.addNotification({
            //               message: index.langs.somethingWentWrong,
            //               type: "error",
            //           });
            //       });
            //   },

            //   deleteSendingProfile: function(id) {
            //       stLoader.showLoader();
            //       var promises = ajax.call([
            //           {
            //               methodname: "local_micro_learninig_delete_smtp",
            //                   args: {
            //                       id: id,
            //                   },
            //           },
            //       ]);
            //       promises[0].done(function() {
            //           stLoader.hideLoader();
            //           notification.addNotification({
            //               message: index.langs.SendingProfiledeleted,
            //               type: "success",
            //           });
            //           index.variables.dataTableReference.draw();
            //       }).fail(function() {
            //           notification.addNotification({
            //               message: index.langs.somethingWentWrong,
            //               type: "error",
            //           });
            //       });
            //   },

              url: function() {
                //   stLoader.showLoader();
                  var promises = ajax.call([
                      {
                          methodname: "local_reports_course",
                              args: {
                                  idnumber: 1234,
                              },
                      },
                  ]);
                  promises[0].done(function() {
                    //   index.dom.sendTestMailModal.modal('hide');
                    //   if () {
                    // //       notification.addNotification({
                    // //           message: index.langs.mailSent,
                    // //           type: "success",
                    // //       });
                    //   } else {
                    //     //   notification.addNotification({
                    //     //       message: index.langs.unableToSendMail,
                    //     //       type: "error",
                    //     //   });
                    //   }

                  });
                //   .fail(function() {
                //       notification.addNotification({
                //           message: index.langs.somethingWentWrong,
                //           type: "error",
                //       });
                //   });
              }
          },
          init: function() {
              index.dom.main = $(document).find("#report-container");
              index.dom.submit = index.dom.main.find("button");

              
              index.dom.submit.on("click", function() {
                index.actions.url();
              });
          },
      };
    return {
      init: index.actions.getString,
      };
  });
