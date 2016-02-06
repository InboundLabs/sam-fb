hbspt.forms.create({ 
    portalId: '314811',
    formId: '8f47d655-0b6b-46a8-b053-55f2a5a77e5a',
    redirectUrl: "//www.sam-solutions.us/234d0d53-9fd0-4f42-9dd4-4fceb1a22e99",
    css: "",
    target: "#tof-form-1-form",
    formData: {
        cssClass: "hs-form stacked hs-custom-form tof-wistia-form"
    },
    onFormReady: function($form) {
        $form.attr("target", "form-redirect-placeholder");
    },
    onFormSubmit: function($form) {
        $($form[0]).trigger("onHsFormSubmit");
    }
});
hbspt.forms.create({ 
    portalId: '314811',
    formId: 'df90301e-0e7e-4d9a-9440-7aa447350c26',
    redirectUrl: "//www.sam-solutions.us/234d0d53-9fd0-4f42-9dd4-4fceb1a22e99",
    css: "",
    target: "#tof-form-2-form",
    formData: {
        cssClass: "hs-form stacked hs-custom-form tof-wistia-form wizard"
    },
    onFormReady: function($form) {
        $form.attr("target", "form-redirect-placeholder");
    },
    onFormSubmit: function($form) {
        $($form[0]).trigger("onHsFormSubmit");
    }
});
(function() {
    "use strict";

    var toggle = function(elem, visible) {
        var d = $.Deferred();
        elem.transit({"opacity": visible ? 1.0 : 0.0}, 200, "ease", function() { d.resolve(); });
        return d.promise();
    };
    var show = function(elem) {
        elem.css("opacity", 0).show();
        return toggle(elem, true);
    };
    var hide = function(elem) {
        return toggle(elem, false);
    };

    window._onWistiaPostRoll = function() {
        var postRollContainer = $(".tof-wistia-postroll");
        $("#tof-form-1").detach().appendTo(postRollContainer);
        var centerContent = function() {
            var centeringContainer = postRollContainer.parent();
            var centeringContainerParent = centeringContainer.parent().parent();
            var contentHeight = postRollContainer.outerHeight();
            var padding = (centeringContainerParent.outerHeight() - contentHeight) / 2;
            if (padding < 0) {
                padding = 0;
            }
            centeringContainer.css({
                "padding-top": padding + "px",
                "padding-bottom": padding + "px"
            });
        }
        centerContent();
        $("#tof-form-1 input").on("click blur", function() {
            setTimeout(centerContent, 0);
            setTimeout(centerContent, 100);
        });
        $("#tof-form-1 form").on("onHsFormSubmit", function() {
            hide($("#tof-form-1")).pipe(function() {
                $("#tof-form-1").detach().appendTo(".form-stage");
                show($("#tof-form-2").css("opacity", 0).detach().appendTo(postRollContainer));
                centerContent();
            });
        });

        // Convert to wizard
        var wizardElem = $("#tof-form-2");
        $("form .hs_submit", wizardElem).hide();
        var questions = $("form > div[data-reactid]:not(.hs_submit)", wizardElem).addClass("tof-quiz-question");
        questions.slice(1).hide();
        questions.find(".inputs-list label").click(function() {
            var thisQuestion = $(this).closest(".tof-quiz-question");
            hide(wizardElem).pipe(function() {
                thisQuestion.hide();
                var next = thisQuestion.next(".tof-quiz-question");
                if (next.length) {
                    next.show();
                    show(wizardElem);
                    centerContent();
                } else {
                    $("form .hs_submit input", wizardElem).click();
                    window._onWistiaPostRoll = function() {
                        postRollContainer = $(".tof-wistia-postroll");
                        $("#cta-post-second-video").detach().appendTo(postRollContainer);
                        centerContent();
                    };
                    wizardElem.detach().appendTo(".form-stage");
                    Wistia.api("yyx776kl2p").replaceWith("7ddx5hc8de");
                    _wq.push({_all: function(video) {
                        video.play();
                        video.bind("seek", function() {
                            video.play();
                        });
                    }});
                }
            });
        });
    };

})();
