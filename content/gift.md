+++
date = "2014-04-09T00:00:00Z"
title = "The gift of giving back"
type = "page"
+++
<article>
  <section class="section">
    <div class="container-fullwidth">
      <div class="row">
        <div class="col-md-12">
          <div class="flexslider" data-flex-directions="hide" data-flex-controlsposition="inside" id="about-slider" data-flex-animation="fade" style="height:480px;" data-flex-speed="4000">
            <ul class="slides"><li data-slotamount="3" data-saveperformance="on" data-title="Intro Slide"><img src="/img/twiztedmyrtle/about/story4.jpg"></li></ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="divider-wrapper">
      <div class="visible-xs element-height-60">
      </div>
      <div class="visible-sm element-height-60">
      </div>
      <div class="visible-md element-height-60">
      </div>
      <div class="visible-lg element-height-60">
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="gift-box">
            <h2>Pay it Forward</h2>
            <p>Put another message here</p>
            <hr style="border-top: 5px solid #50b598">
            <script src="//cdn.donately.com/dntly-core/1.8/core.min.js" type="text/javascript"></script>
            <div id="donation-form"></div>
            <script>
              $(document).ready(function(event) {

                Donately.init({
                  // Make sure selector exists on page
                  selector: '#donation-form',
                  options: {
                    'donately-id': "act_e15d48cba3f6",
                    'stripe-publishable-key': "pk_live_utA1FOFqgfkva7uvXOzctfp4",
                    'donately-presets': "5,10,50,100",
                    'donately-donor-pays-fees': "true",
                    'donately-duration': "default_recurring",
                    'donately-billing-zip': "true",
                    'donately-address': "true",
                    'donately-payment-options': "cc,ach",
                    'donately-custom-css': JSON.stringify({
                      ".donately-donation-form": { "font-family": "\"Palatino-italic\", sans-serif" },
                      ".donately-btn": { "background-color": "#50b598", "width": "100%", "height":"50px", "color": "#ffffff"},
                      ".donately-btn:hover": { "background-color": "#c7bcb6"},
                      ".donately-preset-fields .donately-preset-amounts label": {"background":"linear-gradient(to bottom,from(#ffffff),to(#eeeeee))","color":"#333","border":"1px solid #d2d2d2","borderRadius":"5px","cursor":"pointer"},
                      ".donately-preset-fields .donately-preset-amounts label:hover": { "background-color": "#c7bcb6", "color":"white" },
                      ".donately-secure-header": {"background-color":"#c7bcb6","color":"#333333"},
                      "#donately-onbehalf, #donately-amount, #org_name, #donately-first-name, #donately-last-name, #donately-street-address, #donately-street-address-2, #donately-city, #donately-zip-code, #donately-email, #donately-phone-number, #h-first-name, #h-last-name, #h-email, .donately-donation-form select":{"border":"1px solid #50b598"},
                      "body > div > form > fieldset.donately-fields.donately-preset-fields > label": { "color":"transparent" },
                      "body > div > form > fieldset.donately-fields.donately-preset-fields > label::before": { "content":"'1. Select Gift Amount'", "color": "#4f4f4f", "font-size": "1.5em" },
                      "body > div > form > fieldset.donately-fields.donately-payment-fields > label": { "color":"transparent" },
                      "body > div > form > fieldset.donately-fields.donately-payment-fields > label::before": { "content":"'2. Payment Information'", "color": "#4f4f4f", "font-size": "1.5em" },
                      "body > div > form > fieldset.donately-fields.donately-payment-fields": { "content": "''", "border-top": "5px solid #50b598", "display": "block", "padding-top": "20px" },
                      ".donately-branding": { "display": "none" }
                    })
                  },
                  afterFormLoad: function(){
                    $("#donately-preset-option-1 .donately-label").click(function(){
                      if(!$(this).hasClass("selected")) {
                        $(this).css("background-color", "#50b598").addClass("selected")
                        $("#donately-preset-option-2 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-3 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-4 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                      } else {
                        $(this).css("background-color", "#EDF1F4").removeClass("selected")
                      }
                    })
                    $("#donately-preset-option-2 .donately-label").click(function(){
                      if(!$(this).hasClass("selected")) {
                        $(this).css("background-color", "#50b598").addClass("selected")
                        $("#donately-preset-option-1 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-3 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-4 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                      } else {
                        $(this).css("background-color", "#EDF1F4").removeClass("selected")
                      }
                    })
                    $("#donately-preset-option-3 .donately-label").click(function(){
                      if(!$(this).hasClass("selected")) {
                        $(this).css("background-color", "#50b598").addClass("selected")
                        $("#donately-preset-option-1 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-2 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-4 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                      } else {
                        $(this).css("background-color", "#EDF1F4").removeClass("selected")
                      }
                    })
                    $("#donately-preset-option-4 .donately-label").click(function(){
                      if(!$(this).hasClass("selected")) {
                        $(this).css("background-color", "#50b598").addClass("selected")
                        $("#donately-preset-option-1 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-2 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                        $("#donately-preset-option-3 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                      } else {
                        $(this).css("background-color", "#EDF1F4").removeClass("selected")
                      }
                    })
                    $("#donately-payment-option-1 .donately-label").click(function(){
                      if(!$(this).hasClass("selected")) {
                        $(this).css("background-color", "#50b598").addClass("selected")
                        $("#donately-payment-option-2 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                      } else {
                        $(this).css("background-color", "#EDF1F4").removeClass("selected")
                      }
                    })
                    $("#donately-payment-option-2 .donately-label").click(function(){
                      if(!$(this).hasClass("selected")) {
                        $(this).css("background-color", "#50b598").addClass("selected")
                        $("#donately-payment-option-1 .donately-label").css("background", "#EDF1F4").removeClass("selected")
                      } else {
                        $(this).css("background-color", "#EDF1F4").removeClass("selected")
                      }
                    })
                    $('#donately-amount').hide()
                    $('.donately-dollar-sign').hide()
                    $(".donately-btn").val("Give the Gift")
                   }
                })
              })

            </script>
          <!-- <script src='https://cdn.donately.com/dntly-core/current/core.min.js' data-donately-id='act_e15d48cba3f6' data-stripe-publishable-key='pk_live_utA1FOFqgfkva7uvXOzctfp4'></script> -->
          </div>
        </div>
        <div class="col-md-8">
          <h1>Other content goes here</h1>
          <div class="owl-carousel testimonials-slider desktop">
  <div class="item">
    <div class="slide-content">
      <h1>Michael Luna</h1>
      <h2>Professional Photographer</h2>
      <p>Insightful and wildly gifted with a true world heart, Asha is a rare talent and true compassionate freethinker. Her body of work is both striking and rare, and other times thought provoking to our social consciousness. I feel deeply fortunate to have met her through an unlikely encounter.</p>
    </div>
    <img src="/sliders/testimonials_final/assets/7474e-Testimonial-Base-Luna-copy.jpg" />
  </div>
  <div class="item">
    <div class="slide-content">
      <h1>Twizted Asha</h1>
      <h2>Nasty Woman</h2>
      <p style="margin-top: 6rem;">When was the last time you read a rotten testimonial? Take your time. I’ve got all day.</p>
    </div>
    <img src="/sliders/testimonials_final/assets/ded69-Testimonial-Base-Asha-2.jpg" />
  </div>
  <div class="item">
    <div class="slide-content">
      <h1>Casey Kern</h1>
      <h2>Senior Action Team Coordinator, PETA</h2>
      <p>Asha is truly an explorer of the mind and globe. Her blogs and podcasts hit listeners with a “wake up!” message as she explores shrouded topics from the dark animal skins trade to the invisible scars that we all carry. Her work is always meaningful!</p>
    </div>
    <img src="/sliders/testimonials_final/assets/c50cc-Testimonial-Base-Casey.jpg" />
  </div>
  <div class="item">
    <div class="slide-content">
      <h1>Paul Mulligan</h1>
      <h2>President & CEO, Catholic Charities</h2>
      <p>Asha is truly a force to be reckoned with! Her fearlessness in standing up for those who have no voice makes her both one to watch and learn from. Her tremendous energy and enthusiasm reflect her passion for life, truth and justice.</p>
    </div>
    <img src="/sliders/testimonials_final/assets/09a6f-Testimonial-Base-Paul.jpg" />
  </div>
  <div class="item">
    <div class="slide-content">
      <h1>Eric Snelz</h1>
      <h2>CEO, Helping Hands for Freedom</h2>
      <p>Asha’s photography doesn’t confine itself to one genre. It can be both pleasing to the eye and soul, while other times evoking a visceral reaction to the human condition. Be prepared to have either your imagination or intellect exposed to a unique perspective on life.</p>
    </div>
    <img src="/sliders/testimonials_final/assets/7b6c7-Testimonial-Base-2.jpg" />
  </div>
  <div class="item">
    <div class="slide-content">
      <h1>Norbert Rosing</h1>
      <h2>Professional Wildlife Photographer</h2>
      <p>I worked closely with Asha in Spitsbergen. She has a very artistic photographic eye and is able to pick a piece of art from a regular subject. Her way of communicating with people and talent for photography makes her an extraordinary person to work with and be around.</p>
    </div>
    <img src="/sliders/testimonials_final/assets/828fd-Testimonial-Base-Norbert.jpg" />
  </div>
  <div class="item">
    <div class="slide-content">
      <h1>Mahesh Bhupathi</h1>
      <h2>Retired Prof Tennis Player & Founder of IPTL</h2>
      <p>Asha has a keen eye. She has the ability to see the smallest of details and bring their story to the forefront. She connects with her subjects intimately and captures their essence perfectly. Her photography is compelling!</p>
    </div>
    <img src="/sliders/testimonials_final/assets/94a3a-Testimonial-Base-Bhupathi.jpg" />
  </div>
</div>
<div class="owl-carousel testimonials-slider mobile">
  <div class="item">
    <img src="/sliders/testimonials_final/assets/bb378-testimony-12-michael-luna.png" />
    <div class="slide-content">
      <h1>Michael Luna</h1>
      <h2>Professional Photographer</h2>
      <p>Insightful and wildly gifted with a true world heart, Asha is a rare talent and true compassionate freethinker. Her body of work is both striking and rare, and other times thought provoking to our social consciousness. I feel deeply fortunate to have met her through an unlikely encounter.</p>
    </div>
  </div>
  <div class="item">
    <img src="/sliders/testimonials_final/assets/86de1-testimony-8-twizted-asha.png" />
    <div class="slide-content">
      <h1>Twizted Asha</h1>
      <h2>Nasty Woman</h2>
      <p style="margin-top: 6rem;">When was the last time you read a rotten testimonial? Take your time. I’ve got all day.</p>
    </div>
  </div>
  <div class="item">
    <img src="/sliders/testimonials_final/assets/7648b-testimony-11-casey-kern.png" />
    <div class="slide-content">
      <h1>Casey Kern</h1>
      <h2>Senior Action Team Coordinator, PETA</h2>
      <p>Asha is truly an explorer of the mind and globe. Her blogs and podcasts hit listeners with a “wake up!” message as she explores shrouded topics from the dark animal skins trade to the invisible scars that we all carry. Her work is always meaningful!</p>
    </div>
  </div>
  <div class="item">
    <img src="/sliders/testimonials_final/assets/b8f20-testimony-10-paul-mulligan.png" />
    <div class="slide-content">
      <h1>Paul Mulligan</h1>
      <h2>President & CEO, Catholic Charities</h2>
      <p>Asha is truly a force to be reckoned with! Her fearlessness in standing up for those who have no voice makes her both one to watch and learn from. Her tremendous energy and enthusiasm reflect her passion for life, truth and justice.</p>
    </div>
  </div>
  <div class="item">
    <img src="/sliders/testimonials_final/assets/77005-testimony-7-eric-snelz.png" />
    <div class="slide-content">
      <h1>Eric Snelz</h1>
      <h2>CEO, Helping Hands for Freedom</h2>
      <p>Asha’s photography doesn’t confine itself to one genre. It can be both pleasing to the eye and soul, while other times evoking a visceral reaction to the human condition. Be prepared to have either your imagination or intellect exposed to a unique perspective on life.</p>
    </div>
  </div>
  <div class="item">
    <img src="/sliders/testimonials_final/assets/e492f-testimony-1-norbert-rosing.png" />
    <div class="slide-content">
      <h1>Norbert Rosing</h1>
      <h2>Professional Wildlife Photographer</h2>
      <p>I worked closely with Asha in Spitsbergen. She has a very artistic photographic eye and is able to pick a piece of art from a regular subject. Her way of communicating with people and talent for photography makes her an extraordinary person to work with and be around.</p>
    </div>
  </div>
  <div class="item">
    <img src="/sliders/testimonials_final/assets/92ac0-testimony-5-mahesh-bhupathi.png" />
    <div class="slide-content">
      <h1>Mahesh Bhupathi</h1>
      <h2>Retired Prof Tennis Player & Founder of IPTL</h2>
      <p>Asha has a keen eye. She has the ability to see the smallest of details and bring their story to the forefront. She connects with her subjects intimately and captures their essence perfectly. Her photography is compelling!</p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
    <div class="divider-wrapper">
      <div class="visible-xs element-height-60">
      </div>
      <div class="visible-sm element-height-60">
      </div>
      <div class="visible-md element-height-60">
      </div>
      <div class="visible-lg element-height-60">
      </div>
    </div>
  </section>
</article>
