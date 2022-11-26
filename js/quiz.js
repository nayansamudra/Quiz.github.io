//Lessons Creation
function Quiz_Module() {
  // Appending in the DOM if lesson_category is 1 in Quiz_Access
  for (p = 0; p < Lessons.length; p++) {
    store_lessons_id = Lessons[p][0]
    $('#Quiz_ID').append(`<div class="container" id="${Lessons[p][0]}">
                      <div class="sl-module py-2 my-3 boxshadow Module_Des" id="sl-module-${p}">
                        <div class="sl-module__header-panel" role="button" tabindex="0" onclick="showbody_usingloop(${Lessons[p][0]})">
                          <div class="sl-module__header-panel__progress" >
                            <svg viewBox="0 0 54 54">
                              <defs>
                                   <linearGradient id="gradient0.47330084018480356" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stop-color="#40BF9C"></stop>
                                  <stop offset="100%" stop-color="#40BF9C"></stop>
                                </linearGradient>
                              </defs>
                              <foreignObject width="54" height="54">
                                <div class="sl-circular-progress-container"><img alt="avatar" class="sl-module__avatar locked"
                                    src="img/play_button_logo.png"></div>
                              </foreignObject>
                              <circle transform="rotate(270 27 27)" cx="27" cy="27" r="26" stroke-width="2"
                                stroke-dasharray="163.36281798666926" stroke-dashoffset="0" fill="none" stroke="#C8D2DB"
                                stroke-linecap="round">
                              </circle>
                              <circle transform="rotate(270 27 27)" class="path" cx="27" cy="27" r="26" stroke-width="2"
                                stroke-dasharray="163.36281798666926" stroke-dashoffset="163.36281798666926" fill="none"
                                stroke="#324ed4" stroke-linecap="round"
                                style="transition: stroke-dashoffset 1s ease 0s;">
                              </circle>
                            </svg>
                          </div>
                          <span class="sl-module__title">${Lessons[p][1]}</span>
                          <span class="sl-module__progress">
                            <span id=""></span> 
                            <span id=""></span>
                          </span>
                          <i id="slider_arrow_open_usingloop_${p}" onclick="" style="color:#324ed4;" class="fa-solid fa-angle-down"></i>
                          <i id="slider_arrow_close_usingloop_${p}" style="display:none; color:#324ed4;" onclick=""
                            class="fa-solid fa-angle-up"></i>
                        </div>
                        <div class="row timeline_area" id="body_toggler_${p}" style="display:none">
                          <div class="col-12">
                              <!-- Timeline Area-->
                              <div id="apland-timeline-area_${p}">
                              </div>
                          </div>
                        </div>
                        <div class="sl-module__lesson_${p}" style="display:none">
                          <div class="row mx-2" id="block_open_${p}">
                            <div class="col" id="">
                              <div class="row-12 text-center my-3" id="slide_header_name_${p}" style="font-size:28px"></div>
                              <div class="row-12 my-3 d-flex" id="row_of_arrow_progress_span_${p}">
                                <div class="col mx-0 px-0 col-sm-1" style="color:gray;" onclick="GoBack()"><i
                                    class="fa-solid fa-arrow-left-long fa-2xl"></i></div>
                                <div class="col mx-0 px-0 col-sm-10"><progress id="progBar_${p}" value="1" max=""></progress></div>
                                <div class="col mx-0 px-0 col-sm-1 d-flex justify-content-end">
                                  <div style="">
                                    <span class="sl-module__progress_${p}">
                                      <span id="sl-module__progress_value_${p}">1</span>
                                      /
                                      <span id="sl-module__progress_max_value_${p}"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="mx-5 text-center Quill_Reader" id="quill_reader_${p}" style="font-size:18px"></div>
                              <div class="row mx-5 For_MCQ" id="For_MCQ_${p}" style="font-size:24px">
                                <form id="Form_${p}"></form>
                              </div>
                              <div class="mx-5 my-2 text-center Quill_Hint" id="quill_hint_${p}" 
                                    style="height:200px; font-size:24px; background:#f6e9c8; border-radius:8px;"></div>
                              <div class="d-flex justify-content-center">
                                <div class="mx-5 my-2 py-2 px-5 text-center Right_Wrong" 
                                  style="font-size:24px; background:#324ed4; color:white; border-radius:8px; display:none; width:fit-content">
                                  <span class="px-3" id="right_wrong_${p}"></span><img id="gif_image_${p}" src="img/giphy.png" height="35px" width="35px">
                                </div> 
                              </div> 
                              <div class="row">
                                <div class="col d-flex justify-content-center">
                                  <div class="mx-3 px-3 my-3 d-flex align-items-center justify-content-center Back_Button" id="back_button_${p}"
                                    style="border-radius:10px; border:2px solid #324ed4; color:#324ed4; width:fit-content; height:40px;
                                    font-size:20px; font-weight:bolder; cursor: pointer;" onclick="Back()">
                                    Back
                                  </div>
                                  <div class="mx-3 px-3 my-3 d-flex align-items-center justify-content-center Submit_button" id="submit_button_${p}"
                                    style="border-radius:10px; background-color:#324ed4; color:white; width:fit-content; height:40px;
                                    font-size:20px; font-weight:bolder; cursor: pointer;" onclick="checking()">
                                    Got it, Go ahead
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`)
  }
  Call_Meta_Data()
}


function Call_Meta_Data() {
  // Meta Data
  if (JSON.parse(Meta_Data[0][1]) == null) {
    console.log('u r on if part')
    p = 0
    console.log('NULL')
    Point_Value = 0
    $(`[id="${Lesson_ID[0]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')

    // Created a DICT for 1st Lessons (how many sub_lessons are there AND each sub_lessons contain how many slides)
    for (var x = 0; x < Sub_Lessons.length; x++) {
      if (Sub_Lessons[x][1] == Lessons[0][0]) {
        console.log(Sub_Lessons[x][1], Lessons[0][0])
        // store the ID of the sub_lessons which are there in 1st Lessons
        key_for_Dict_for_count_for_Sub_lessons_slide.push(Sub_Lessons[x][0])
      }
    }
    console.log(key_for_Dict_for_count_for_Sub_lessons_slide)
    for (var y = 0; y < key_for_Dict_for_count_for_Sub_lessons_slide.length; y++) {
      for (var z = 0; z < Sub_Lessons_Slide.length; z++) {
        if (key_for_Dict_for_count_for_Sub_lessons_slide[y] == Sub_Lessons_Slide[z][1]) {
          counter_for_Sub_Lesson_slide_count += 1
        }
      }
      // store the count of the slides which are there in each sub_lessons
      value_for_Dict_for_count_for_Sub_lessons_slide.push(counter_for_Sub_Lesson_slide_count)
      counter_for_Sub_Lesson_slide_count = 0
    }
    key_for_Dict_for_count_for_Sub_lessons_slide.forEach((key, i) => Dict_for_count_for_Sub_lessons_slide[key] = value_for_Dict_for_count_for_Sub_lessons_slide[i]);

  }
  else {
    console.log('u r on else part')
    Point_Value = Meta_Data[0][0]
    // $(`#point_value_${p}`).val(Point_Value)
    Meta_Data_Comparison = JSON.parse(Meta_Data[0][1])
    user_Progress_1 = Meta_Data_Comparison


    // Each Sub_Lessons is containing how many slides
    original_count_of_each_sub_lessons_slide = []
    counter_for_original_count_of_each_sub_lessons_slide = 0
    Dict_for_original_count_of_each_sub_lessons_slide = {}
    for (var i = 0; i < Sub_Lesson_ID.length; i++) {
      for (var j = 0; j < Sub_Lessons_Slide.length; j++) {
        if (Sub_Lesson_ID[i] == Sub_Lessons_Slide[j][1]) {
          counter_for_original_count_of_each_sub_lessons_slide += 1
        }
      }
      original_count_of_each_sub_lessons_slide.push(counter_for_original_count_of_each_sub_lessons_slide)
      counter_for_original_count_of_each_sub_lessons_slide = 0
    }
    Sub_Lesson_ID.forEach((key, i) => Dict_for_original_count_of_each_sub_lessons_slide[key] = original_count_of_each_sub_lessons_slide[i])


    // Each Lessons is containing how many Sub_Lessons
    original_count_of_each_sub_lessons = []
    counter_for_original_count_of_each_sub_lessons = 0
    Dict_for_original_count_of_each_sub_lessons = {}
    for (var i = 0; i < Lesson_ID.length; i++) {
      for (var j = 0; j < Sub_Lessons.length; j++) {
        if (Lesson_ID[i] == Sub_Lessons[j][1]) {
          counter_for_original_count_of_each_sub_lessons += 1
        }
      }
      original_count_of_each_sub_lessons.push(counter_for_original_count_of_each_sub_lessons)
      counter_for_original_count_of_each_sub_lessons = 0
    }
    Lesson_ID.forEach((key, i) => Dict_for_original_count_of_each_sub_lessons[key] = original_count_of_each_sub_lessons[i])


    // Store the Id of sub_Lessons of the slides which are completed 
    // In Other Words, the slides which are completed belongs to which Sub_Lessons  
    Dict_for_Completed_Sub_Lessons_slide = []
    for (var a = 0; a < Meta_Data_Comparison.length; a++) {
      for (var b = 0; b < Sub_Lessons_Slide.length; b++) {
        if (Meta_Data_Comparison[a] == Sub_Lessons_Slide[b][0]) {
          Dict_for_Completed_Sub_Lessons_slide.push(Sub_Lessons_Slide[b][1])
        }
      }
    }
    console.log(Dict_for_Completed_Sub_Lessons_slide)


    // How many slides are completed of each sub_lessons
    count_of_each_sub_lessons_slide = []
    counter_for_count_of_each_sub_lessons_slide = 0
    Dict_for_count_of_each_sub_lessons_slide = {}
    for (var i = 0; i < Sub_Lesson_ID.length; i++) {
      for (var j = 0; j < Dict_for_Completed_Sub_Lessons_slide.length; j++) {
        if (Sub_Lesson_ID[i] == Dict_for_Completed_Sub_Lessons_slide[j]) {
          counter_for_count_of_each_sub_lessons_slide += 1
        }
      }
      count_of_each_sub_lessons_slide.push(counter_for_count_of_each_sub_lessons_slide)
      counter_for_count_of_each_sub_lessons_slide = 0
    }
    Sub_Lesson_ID.forEach((key, i) => Dict_for_count_of_each_sub_lessons_slide[key] = count_of_each_sub_lessons_slide[i])


    // Check how many sub_lessons are fully completed
    Dict_for_Completed_Sub_Lessons = []
    for (var i = 0; i < Object.keys(Dict_for_original_count_of_each_sub_lessons_slide).length; i++) {
      for (var j = 0; j < Object.keys(Dict_for_count_of_each_sub_lessons_slide).length; j++) {
        if (Object.keys(Dict_for_original_count_of_each_sub_lessons_slide)[i] == Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]) {
          if (Object.values(Dict_for_count_of_each_sub_lessons_slide)[i] != 0) {
            if (Object.values(Dict_for_count_of_each_sub_lessons_slide)[i] == Object.values(Dict_for_original_count_of_each_sub_lessons_slide)[i]) {
              Dict_for_Completed_Sub_Lessons.push(Object.keys(Dict_for_count_of_each_sub_lessons_slide)[i])
            }
          }
        }
      }
    }
    for (var i = 0; i < Sub_Lessons.length; i++) {
      for (var j = 0; j < Dict_for_Completed_Sub_Lessons.length; j++) {
        if (Dict_for_Completed_Sub_Lessons[j] == Sub_Lessons[i][0]) {
          $(`[id="${Sub_Lessons[i][1]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
        }
      }
    }
    if (Dict_for_Completed_Sub_Lessons.length == 0) {
      $(`[id="${Lesson_ID[0]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
    }


    // The Sub_Lessons which are completed belongs to which Lessons
    Dict_for_Storing_Linking_ID_of_Completed_sub_lessons = []
    for (var i = 0; i < Dict_for_Completed_Sub_Lessons.length; i++) {
      for (var j = 0; j < Sub_Lessons.length; j++) {
        if (Dict_for_Completed_Sub_Lessons[i] == Sub_Lessons[j][0]) {
          Dict_for_Storing_Linking_ID_of_Completed_sub_lessons.push(Sub_Lessons[j][1])
        }
      }
    }


    // How many Sub_Lessons of Each Lessons are completed
    count_of_each_sub_lessons = []
    counter_for_count_of_each_sub_lessons = 0
    Dict_for_count_of_each_sub_lessons = {}
    for (var i = 0; i < Lesson_ID.length; i++) {
      for (var j = 0; j < Dict_for_Storing_Linking_ID_of_Completed_sub_lessons.length; j++) {
        if (Lesson_ID[i] == Dict_for_Storing_Linking_ID_of_Completed_sub_lessons[j]) {
          counter_for_count_of_each_sub_lessons += 1
        }
      }
      count_of_each_sub_lessons.push(counter_for_count_of_each_sub_lessons)
      counter_for_count_of_each_sub_lessons = 0
    }
    Lesson_ID.forEach((key, i) => Dict_for_count_of_each_sub_lessons[key] = count_of_each_sub_lessons[i])
    // calculating Z-index 
    for (var i = 0; i < Sub_Lessons.length; i++) {
      for (var j = 0; j < Dict_for_Completed_Sub_Lessons.length; j++) {
        if (Dict_for_Completed_Sub_Lessons[j] == Sub_Lessons[i][0]) {
          for (var k = 0; k < Object.keys(Dict_for_count_of_each_sub_lessons).length; k++) {
            if (Sub_Lessons[i][1] == Object.keys(Dict_for_count_of_each_sub_lessons)[k]) {
              var x = Object.values(Dict_for_count_of_each_sub_lessons)[k]
              var y = Object.values(Dict_for_original_count_of_each_sub_lessons)[k]
              var z = 163.36 - (((parseFloat((x * 100) / y)) * 163) / 100)
              $(`[id="${Object.keys(Dict_for_count_of_each_sub_lessons)[k]}"] .path`).attr("stroke-dashoffset", z)
            }
          }
        }
      }
    }


    // Check how many lessons are fully completed
    Dict_for_Completed_Lessons = []
    for (var i = 0; i < Object.keys(Dict_for_original_count_of_each_sub_lessons).length; i++) {
      for (var j = 0; j < Object.keys(Dict_for_count_of_each_sub_lessons).length; j++) {
        if (Object.keys(Dict_for_original_count_of_each_sub_lessons)[i] == Object.keys(Dict_for_count_of_each_sub_lessons)[j]) {
          if (Object.values(Dict_for_count_of_each_sub_lessons)[i] != 0) {
            if (Object.values(Dict_for_count_of_each_sub_lessons)[i] == Object.values(Dict_for_original_count_of_each_sub_lessons)[i]) {
              Dict_for_Completed_Lessons.push(Object.keys(Dict_for_count_of_each_sub_lessons)[i])
              $(`[id="${Object.keys(Dict_for_count_of_each_sub_lessons)[i]}"] .sl-module__avatar`).removeClass('inprogress').addClass('completed')
              if (i != Object.keys(Dict_for_original_count_of_each_sub_lessons).length - 1) {
                $(`[id="${Object.keys(Dict_for_count_of_each_sub_lessons)[i + 1]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
              }
            }
          }
        }
      }
    }
    if (Dict_for_Completed_Lessons.length != 0) {
      for (var a = 0; a < Dict_for_Completed_Lessons.length; a++) {
        $(`[id="${Dict_for_Completed_Lessons[i]}"] .sl-module__avatar`).removeClass('inprogress').addClass('completed')
        $(`[id="${Dict_for_Completed_Lessons[i]}"] .path`).attr("stroke-dashoffset", 0)
      }
    }
  }
}


// Sub Lessons Creation
function showbody_usingloop(data) {
  console.log(data)
  for (var a = 0; a < Lessons.length; a++) {
    if (data == Lessons[a][0]) {        // checking if data(parameter) == Lessons_ID
      console.log(data)
      console.log(Lessons[a][0])

      if ($(`[id="${Lessons[a][0]}"] .sl-module__avatar`).hasClass('completed')) {
        console.log('lesson is already completed')
      }
      else if ($(`[id="${Lessons[a][0]}"] .sl-module__avatar`).hasClass('inprogress')) {
        console.log('lesson is started')
      }
      else if ($(`[id="${Lessons[a][0]}"] .sl-module__avatar`).hasClass('locked')) {
        console.log('lesson is locked')
      }

      if (Dict_5.length == 0) {
        Dict_5.push(Lessons[a][0])
      }
      else {
        for (var i = 0; i < Dict_5.length; i++) {
          if (Dict_5[i] == data) {
            counter_for_Sub_Lesson_toggler = 2
            break;
          }
          else {
            counter_for_Sub_Lesson_toggler = 1
            console.log(Dict_5, counter_for_Sub_Lesson_toggler)
          }
        }
        Dict_5.push(Lessons[a][0])
      }

      p = a
      console.log('p=' + p, 'counter_for_Sub_Lesson_toggler=' + counter_for_Sub_Lesson_toggler)
      $(`#slider_arrow_open_usingloop_${p}`).toggle();
      $(`#slider_arrow_close_usingloop_${p}`).toggle();
      $(`#body_toggler_${p}`).toggle();
      // if (counter_for_Sub_Lesson_toggler == 2) { return }
      // (data) is equal to (=) which lessons & that lesson has how many sub_lessons 
      Dict_3 = []
      for (var b = 0; b < Sub_Lessons.length; b++) {
        if (Lessons[a][0] == Sub_Lessons[b][1]) {
          Dict_3.push(Sub_Lessons[b])
        }
      }
      // (data = lesson) Each sub_lessons has how many slides
      Dict_4 = {}
      Key_for_Dict_4 = []
      Value_for_Dict_4 = []
      counter_for_Dict_4 = 0
      for (var x = 0; x < Sub_Lessons.length; x++) {
        if (Sub_Lessons[x][1] == Lessons[a][0]) {
          console.log(Sub_Lessons[x][1], Lessons[a][0])
          // store the ID of the sub_lessons which are there in 1st Lessons
          Key_for_Dict_4.push(Sub_Lessons[x][0])
        }
      }
      console.log(Key_for_Dict_4)
      for (var y = 0; y < Key_for_Dict_4.length; y++) {
        for (var z = 0; z < Sub_Lessons_Slide.length; z++) {
          if (Key_for_Dict_4[y] == Sub_Lessons_Slide[z][1]) {
            counter_for_Dict_4 += 1
          }
        }
        // store the count of the slides which are there in each sub_lessons
        Value_for_Dict_4.push(counter_for_Dict_4)
        counter_for_Dict_4 = 0
      }
      Key_for_Dict_4.forEach((key, i) => Dict_4[key] = Value_for_Dict_4[i]);
      console.log(Dict_4)
      if (counter_for_Sub_Lesson_toggler == 2) { return }
      for (var i = 0; i < Dict_3.length; i++) {
        // checking if Sub_Lessons_Linking_ID == Lessons_ID
        console.log(Lessons[a][0], Sub_Lessons[i][1], Sub_Lessons[i][0])
        console.log(`#apland-timeline-area_${a}`)
        // creation of the Sub_lessons
        $(`#apland-timeline-area_${a}`).append(`<div class="single-timeline-area" id="single-timeline-area_${i}_${Dict_3[i][1]}">
                <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s" id="Dot_${parseInt(Dict_3[i][2])}_${Dict_3[i][1]}"
                  style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                </div>
                <div class="row" id="Row_${parseInt(Dict_3[i][2])}_${Dict_3[i][1]}" onclick="">
                  <div class="col-12 col-md-6 col-lg-4" id="" onclick="show_sub_lessons_slide(${Dict_3[i][0]})" style="">
                    <div class="single-timeline-content d-flex wow fadeInLeft" id="Body_${Dict_3[i][0]}"
                      data-wow-delay="0.3s"
                      style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; background-color:#eaf0f3">
                      <div class="timeline-text">
                        <h6>${Dict_3[i][3]}<br><br></h6>
                        <p><span id="Completed_or_not_${Dict_3[i][0]}">0</span>/${Object.values(Dict_4)[i]}</p>
                        <div class="d-flex align-items-end py-2 px-2">
                          <div sl-test-data="groupItemStatus" class="sl-group-item-status locked" id="Status_${Dict_3[i][0]}">
                            <div class="icon-wrapper locked">
                              <div class="icon-wrapper__icon locked">
                                <i class="fa-solid fa-lock fa-2xl"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`);
      }
      for (var i = 0; i < Dict_3.length; i++) {
        if (i != 0) {
          console.log('started, i=' + i)
          if (parseInt(Dict_3[i][2]) == parseInt(Dict_3[i - 1][2])) {
            console.log('started deleting & adding it into last one & i=' + i)
            $(`[id="single-timeline-area_${i}_${Dict_3[i][1]}"]`).remove();
            $(`[id="Row_${parseInt(Dict_3[i - 1][2])}_${Dict_3[i - 1][1]}"]`).append(`<div class="col-12 col-md-4 col-lg-4" id="" onclick="show_sub_lessons_slide(${Dict_3[i][0]})" style="">
              <div class="single-timeline-content d-flex wow fadeInLeft" id="Body_${Dict_3[i][0]}"
                data-wow-delay="0.3s"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; background-color:#eaf0f3">
                <div class="timeline-text">
                  <h6>${Dict_3[i][3]}<br><br></h6>
                  <p><span id="Completed_or_not_${Dict_3[i][0]}">0</span>/${Object.values(Dict_4)[i]}</p>
                  <div class="d-flex align-items-end py-2 px-2">
                    <div sl-test-data="groupItemStatus" class="sl-group-item-status locked" id="Status_${Dict_3[i][0]}">
                      <div class="icon-wrapper locked">
                        <div class="icon-wrapper__icon locked">
                          <i class="fa-solid fa-lock fa-2xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`);
          }
        }
        Meta_Data_Comparison__1()
      }
    }
  }
}

// Meta Data Comparison
function Meta_Data_Comparison__1() {


  if (JSON.parse(Meta_Data[0][1]) == null) {
    console.log('NULL')
    if ($(`[id="${Dict_5[Dict_5.length - 1]}"] .sl-module__avatar`).hasClass("inprogress")) {

      $(`[id="Body_${Object.keys(Dict_for_count_for_Sub_lessons_slide)[0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
      $(`[id="Status_${Object.keys(Dict_for_count_for_Sub_lessons_slide)[0]}"]`).empty();
      $(`[id="Status_${Object.keys(Dict_for_count_for_Sub_lessons_slide)[0]}"]`).removeClass('locked');
      $(`[id="Status_${Object.keys(Dict_for_count_for_Sub_lessons_slide)[0]}"]`).addClass('unlocked');
      $(`[id="Status_${Object.keys(Dict_for_count_for_Sub_lessons_slide)[0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                  <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                              </div>`);
      $(`[id="Dot_${parseInt(Sub_Lessons[0][2])}_${Lessons[0][0]}"]`).append(`<style>[id="Dot_${parseInt(Sub_Lessons[0][2])}_${Lessons[0][0]}"]::before{background-color:#2493df !important;}</style>`);
    }
  }
  else {
    console.log('u r on else part')
    if (Dict_for_Completed_Sub_Lessons.length == 0) {
      for (var i = 0; i < Dict_for_Completed_Sub_Lessons_slide.length; i++) {
        for (var j = 0; j < Object.keys(Dict_for_count_of_each_sub_lessons_slide).length; j++) {
          if (Dict_for_Completed_Sub_Lessons_slide[i] == Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]) {
            if (!$(`[id="${Dict_5[Dict_5.length - 1]}"] .sl-module__avatar`).hasClass('completed')) {
              $(`[id="${Lesson_ID[0]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
              $(`[id="Body_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
              $(`[id="Status_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]}"]`).empty();
              $(`[id="Status_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]}"]`).removeClass('locked');
              $(`[id="Status_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]}"]`).addClass('unlocked');
              $(`[id="Status_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]}"]`).append(`<div class="icon-wrapper unlocked">
                                                          <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                      </div>`);
              $(`[id="Completed_or_not_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[j]}"]`).text(Object.values(Dict_for_count_of_each_sub_lessons_slide)[j])
              $(`[id="Dot_${parseInt(Sub_Lessons[0][2])}_${Lessons[0][0]}"]`).append(`<style>[id="Dot_${parseInt(Sub_Lessons[0][2])}_${Lessons[0][0]}"]::before{background-color:#2493df !important;}</style>`);
            }
          }
        }
      }
    }
    else {
      for (var a = 0; a < Dict_for_Completed_Sub_Lessons.length; a++) {
        for (var b = 0; b < Dict_3.length; b++) {
          if (Dict_for_Completed_Sub_Lessons[a] == Dict_3[b][0]) {
            console.log(Meta_Data_Comparison[a])
            console.log(Sub_Lessons_Slide[b][1])
            $(`[id="Body_${Dict_3[b][0]}"]`).attr('style', 'background-color: #eaf0f3 !important');
            $(`[id="Status_${Dict_3[b][0]}"]`).empty();
            $(`[id="Status_${Dict_3[b][0]}"]`).removeClass('unlocked').addClass('completed');
            $(`[id="Status_${Dict_3[b][0]}"]`).append(`<div class="icon-wrapper completed">
                                                                  <div class="icon-wrapper__icon completed"><i class="fa-solid fa-circle-check fa-2xl"></i></div>
                                                                </div>`);
            for (var c = 0; c < Object.keys(Dict_for_count_of_each_sub_lessons_slide).length; c++) {
              if (Dict_3[b][0] == Object.keys(Dict_for_count_of_each_sub_lessons_slide)[c]) {
                console.log(Sub_Lessons_Slide[b][1], Object.keys(Dict_for_count_of_each_sub_lessons_slide)[c])
                $(`[id="Completed_or_not_${Dict_3[b][0]}"]`).text(Object.values(Dict_for_count_of_each_sub_lessons_slide)[c])
              }
            }
            if ($(`[id="Status_${Dict_3[b][0]}"]`).hasClass('completed')) {
              for (var c = 0; c < Sub_Lessons.length; c++) {
                console.log('abc')
                if (Dict_3[b][0] == Sub_Lessons[c][0]) {
                  console.log('def')
                  console.log(Sub_Lessons[c][0])
                  $(`[id="Dot_${parseInt(Dict_3[b][2])}_${Dict_3[b][1]}"]`).append(`<style>[id="Dot_${parseInt(Dict_3[b][2])}_${Dict_3[b][1]}"]::before{background-color:#324ed4 !important;}</style>`);
                  if (c != Sub_Lessons.length - 1) {
                    if (b == Dict_3.length - 1) { console.log('last position') }
                    else {
                      $(`[id="Dot_${parseInt(Dict_3[b + 1][2])}_${Dict_3[b][1]}"]`).append(`<style>[id="Dot_${parseInt(Dict_3[b + 1][2])}_${Dict_3[b][1]}"]::before{background-color:#2493df !important;}</style>`);
                    }
                  } break;
                }
              }
            }
            for (var e = 0; e < Sub_Lesson_ID.length; e++) {
              if (Dict_3[b][0] == Sub_Lesson_ID[e]) {
                console.log(Dict_3[b][0], Sub_Lesson_ID[e])
                if (b == Dict_3.length - 1) { console.log('last position') }
                else {
                  $(`[id="Body_${Dict_3[b + 1][0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
                  $(`[id="Status_${Dict_3[b + 1][0]}"]`).empty();
                  $(`[id="Status_${Dict_3[b + 1][0]}"]`).removeClass('locked');
                  $(`[id="Status_${Dict_3[b + 1][0]}"]`).addClass('unlocked');
                  $(`[id="Status_${Dict_3[b + 1][0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                              <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                          </div>`);
                }
              }
            }
          }
          else {
            console.log('u r on that lessons which is not fully completed')
            if ($(`[id="${Dict_3[b][1]}"] .sl-module__avatar`).hasClass('inprogress')) {
              if ($(`[id="Status_${Dict_3[b][0]}"]`).hasClass('completed')) { console.log('sub lesson is completed') }
              else {
                console.log('sub lesson is not completed')
                if ($(`[id="Status_${Dict_3[0][0]}"]`).hasClass('completed')) { console.log('sub lesson is completed') }
                else {
                  $(`[id="Body_${Dict_3[0][0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
                  $(`[id="Status_${Dict_3[0][0]}"]`).empty();
                  $(`[id="Status_${Dict_3[0][0]}"]`).removeClass('locked');
                  $(`[id="Status_${Dict_3[0][0]}"]`).addClass('unlocked');
                  $(`[id="Status_${Dict_3[0][0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                              <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                          </div>`);
                  $(`[id="Dot_${parseInt(Dict_3[0][2])}_${Dict_3[0][1]}"]`).append(`<style>[id="Dot_${parseInt(Dict_3[0][2])}_${Dict_3[0][1]}"]::before{background-color:#2493df !important;}</style>`);
                }
              }
            }
          }
        }
      }
      for (var i = 0; i < Sub_Lessons.length; i++) {
        if (Object.values(Dict_for_count_of_each_sub_lessons_slide)[i] != Object.values(Dict_for_original_count_of_each_sub_lessons_slide)[i]) {
          $(`[id="Completed_or_not_${Object.keys(Dict_for_count_of_each_sub_lessons_slide)[i]}"]`).text(Object.values(Dict_for_count_of_each_sub_lessons_slide)[i])
        }
      }
    }
  }
}

// Sub Lessons Slides Creation 
function show_sub_lessons_slide(data) {
  setTimeout(function () {
    console.log(data)
    // checking whether the sub lessons is locked, unlocked or completed
    for (var e = 0; e < Sub_Lesson_ID.length; e++) {
      if (data == Sub_Lesson_ID[e]) {
        console.log(data, Sub_Lesson_ID[e])
        if ($(`[id="Status_${Sub_Lesson_ID[e]}"]`).hasClass('unlocked') || $(`[id="Status_${Sub_Lesson_ID[e]}"]`).hasClass('completed')) {
          // if sub lessons is unlocked create Dictionary
          console.log('It is a unlocked or completed Sub Lessons')
          Dict_1 = {}
          Key_for_Dict_1 = []
          Value_for_Dict_1 = []
          Dict_2 = {}
          Key_for_Dict_2 = []
          Value_for_Dict_2 = []
          Key_for_Dict_1.push(data)
          for (var d = 0; d < Sub_Lessons_Slide.length; d++) {
            if (data == Sub_Lessons_Slide[d][1]) {
              console.log(Sub_Lessons_Slide[d][1])
              Value_for_Dict_1.push(Sub_Lessons_Slide[d][0])
              Key_for_Dict_2.push(Sub_Lessons_Slide[d][0])
              Value_for_Dict_2.push(Sub_Lessons_Slide[d])
            }
          }
          Dict_1[Key_for_Dict_1] = Value_for_Dict_1
          Key_for_Dict_2.forEach((key, i) => Dict_2[key] = Value_for_Dict_2[i]);
          console.log(Dict_1)
          console.log(Dict_2)
          if (Object.values(Dict_2).length == 0) { return }
          var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike', 'image', 'video', 'link'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            // [{ 'direction': 'rtl' }],                      //direction rtl<->ltr
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ]
          quill = new Quill(`#quill_reader_${p}`, {
            modules: {
              toolbar: false
            },
            // placeholder: 'Compose an epic...',
            bounds: "document.body",
            readOnly: true,
            theme: 'bubble'  // or 'bubble'	
          });

          quill_1 = new Quill(`#quill_hint_${p}`, {
            modules: {
              toolbar: false,
            },
            // placeholder: 'Compose an epic...',
            bounds: "document.body",
            readOnly: true,
            theme: 'bubble'  // or 'bubble'	
          })

          $(`.container`).hide();
          $(`[id="${Lessons[p][0]}"]`).show();
          $(`#body_toggler_${p}`).hide();
          $('.sl-module__header-panel').hide();
          $(`.sl-module__lesson_${p}`).show();
          console.log(p, `.sl-module__lesson_${p}`)
          horizontal_PB = parseInt($(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text())
          console.log(horizontal_PB)
          if ($(`[id="Status_${Sub_Lesson_ID[e]}"]`).hasClass('completed')) {
            horizontal_PB = 0
          }
          // $(`#point_value_${p}`).text(Point_Value)
          next_slide()
        }
        else if ($(`[id="Status_${Sub_Lesson_ID[e]}"]`).hasClass('locked')) {
          // if sub lessons is locked do nothing
          console.log('It is a locked Sub Lessons')
        }
      }
    }
  }, 700)
}

// Function for Checking the MCQ
function checking() {
  if (horizontal_PB == Object.values(Dict_2).length) {
    setTimeout(function () {
      setTimeout(() => {
        $.post("https://tcistudents.com/quizApi/fetch_metadata", { email: 'samudragupta201@gmail.com' }, function (data) {
          Meta_Data = data
          console.log('Meta_Data')
          console.log(Meta_Data)
          if (Meta_Data[0][1] == null) {
            Point_Value = 0
          }
          else (
            Point_Value = parseInt(Meta_Data[0][0])
          )
        });
      }, 10);
      setTimeout(() => {
        pointer_for_Sub_Lesson_slide_count = 0
        $("input[type='checkbox'][name='type']").attr("checked", false);
        if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('unlocked')) {
          console.log('sub lesson is ended');
          $('.sl-module__header-panel').show();
          $(`#body_toggler_${p}`).show();
          $(`.sl-module__lesson_${p}`).hide();
          $('.container').show()
          $(`[id="Body_${Object.keys(Dict_1)}"]`).attr('style', 'background-color: #eaf0f3 !important');
          $(`[id="Status_${Object.keys(Dict_1)}"]`).empty();
          $(`[id="Status_${Object.keys(Dict_1)}"]`).removeClass('unlocked').addClass('completed');
          $(`[id="Status_${Object.keys(Dict_1)}"]`).append(`<div class="icon-wrapper completed">
                                                                <div class="icon-wrapper__icon completed"><i class="fa-solid fa-circle-check fa-2xl"></i></div>
                                                              </div>`);
          $(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text(Object.values(Dict_2).length);
          if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('completed')) {
            for (var a = 0; a < Dict_3.length; a++) {
              console.log('abc')
              if (Object.keys(Dict_1)[0] == Dict_3[a][0]) {
                console.log('def')
                console.log(Object.keys(Dict_1)[0])
                console.log(Dict_3[a][0])
                $(`[id="Dot_${parseInt(Dict_3[a][2])}_${Dict_3[a][1]}"]`).append(`<style>[id="Dot_${parseInt(Dict_3[a][2])}_${Dict_3[a][1]}"]::before{background-color:#324ed4 !important;}</style>`);
                if (a != Dict_3.length - 1) {
                  $(`#Dot_${parseInt(Dict_3[a + 1][2])}_${Dict_3[a][1]}`).append(`<style>#Dot_${parseInt(Dict_3[a + 1][2])}_${Dict_3[a][1]}::before{background-color:#2493df !important;}</style>`);
                }
                break;
              }
            }
          }
          for (var e = 0; e < Dict_3.length; e++) {
            if (Object.keys(Dict_1) == Dict_3[e][0]) {
              console.log(Object.keys(Dict_1), Dict_3[e][1])
              if (e == 5) {
                for (var i = 0; i < Lessons.length; i++) {
                  if (Dict_3[e][1] == Lessons[i][0] && i != (Lessons.length - 1)) {
                    $(`[id="${Lessons[i][0]}"] .sl-module__avatar`).removeClass('inprogress').addClass('completed')
                    Call_Meta_Data()
                    console.log('call meta data fun is fully completed')
                    $(`[id="${Lessons[i + 1][0]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
                    for (var j = 0; j < Sub_Lessons.length; j++) {
                      if (Lessons[i + 1][0] == Sub_Lessons[j][1]) {
                        $(`[id="Body_${Sub_Lessons[j][0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).empty();
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).removeClass('locked');
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).addClass('unlocked');
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                            <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                        </div>`);
                      }
                      break;
                    }
                  }
                }
              }
              else {
                $(`[id="Body_${Dict_3[e + 1][0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).empty();
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).removeClass('locked');
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).addClass('unlocked');
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                              <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                          </div>`);
              }
            }
          }
          if (!$(`[id="${Lesson_ID[p]}"] .sl-module__avatar`).hasClass("completed")) {
            $(`[id="${Lesson_ID[p]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
          }
          var x = $(`[id="${Lesson_ID[p]}"] .icon-wrapper .completed`).length
          var y = $(`[id="${Lesson_ID[p]}"] .sl-group-item-status`).length
          var z = 163.36 - (((parseFloat((x * 100) / y)) * 163) / 100)
          console.log(x, y, z)
          $(`[id="${Lesson_ID[p]}"] .path`).attr("stroke-dashoffset", z)
        }
        else if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('completed')) {
          $('.sl-module__header-panel').show();
          $(`#body_toggler_${p}`).show();
          $(`.sl-module__lesson_${p}`).hide();
          $('.container').show()
        }
      }, 200);
    }, 500)
    horizontal_PB = 0
    return
  }
  else if (clicks == 0) {
    $(`#quill_hint_${p}`).hide();
    if (Object.values(Dict_2)[horizontal_PB][3] == 'info') {
      if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
        $(`#quill_hint_${p}`).show();
      }
      user_Progress.push(Object.values(Dict_2)[horizontal_PB][0])
      user_Progress_1.push(Object.values(Dict_2)[horizontal_PB][0])
      console.log(user_Progress)
      pointer_for_Sub_Lesson_slide_count += 1
      // $(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text(pointer_for_Sub_Lesson_slide_count);
      horizontal_PB += 1
      if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('unlocked')) {
        $(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text(pointer_for_Sub_Lesson_slide_count);
        Point_Value = parseInt(Point_Value)
        $('#Point_Value').text(Point_Value)
        $('#Point_Value_1').text(Point_Value)
        $.post("https://tcistudents.com/quizApi/update_metadata", { email: 'samudragupta201@gmail.com', progress_slides: JSON.stringify(user_Progress), pts: Point_Value },
          function (data) {
            console.log(data)
          });
      }
      // $(`#point_value_${p}`).text(Point_Value)
      next_slide()
    }
    else if (Object.values(Dict_2)[horizontal_PB][3] == 'mcq') {

      let dic = JSON.parse(Object.values(Dict_2)[horizontal_PB][6])
      let dic_value = Object.values(dic)
      console.log(dic_value[4]);

      var checked_1 = [];
      var index = 1
      for (var a = 1; a < dic_value.length; a++) {
        if (dic_value[a - 1] != '') {
          $(`input[type='checkbox'][name='type'][id='checkbox_${a}_${Object.values(Dict_2)[horizontal_PB][0]}']`).each(function () {
            if (this.checked) {
              checked_1.push(index);
              console.log(this, index)
            }
            else {
              //do nothing
            }
            index++;
          })
        }
      }
      console.log(checked_1)

      if (JSON.stringify(checked_1) == JSON.stringify(dic_value[4])) {
        console.log('GOOD')
        $(`#block_open_${p}`).hide();
        // $(`#gify_${p}`).show();
        // setTimeout(() => {
        // $(`#gify_${p}`).hide();
        $(`#block_open_${p}`).show();
        $(`#right_wrong_${p}`).text('Correct Answer')
        $(`.Right_Wrong`).css('background-color', '#324ed4')
        $(`#right_wrong_${p}`).css('background-color', '#324ed4')
        $(`#gif_image_${p}`).attr('src', 'img/giphy.png')
        $(`.Right_Wrong`).show();
        $(`#right_wrong_${p}`).show();
        $(`#gif_image_${p}`).show();
        // function blink_text() {
        //   let a=`#right_wrong_${p}`
        //   let b=`#gif_image_${p}`
        //   $(a,b).fadeIn(250);
        //   $(a,b).fadeOut(250);
        //   // $(a,b).fadeIn(250);
        //   // $(`#gif_image_${p}`).fadeOut(250);
        //   // $(`#right_wrong_${p}`,`#gif_image_${p}`).fadeIn(250);
        //   // $(`#gif_image_${p}`).fadeIn(250);
        // }
        // setInterval(blink_text, 500);
        if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
          $(`#quill_hint_${p}`).show();
        }
        $(`#submit_button_${p}`).text('Go Ahead');
        if (horizontal_PB == (Object.values(Dict_2).length - 1)) {
          $(`#submit_button_${p}`).text('Go to next chapter');
        }
        // }, 2000);
        setTimeout(function () {
          $(`#right_wrong_${p}`).hide();
          $(`.Right_Wrong`).hide();
        }, 4000)
        user_Progress.push(Object.values(Dict_2)[horizontal_PB][0])
        user_Progress_1.push(Object.values(Dict_2)[horizontal_PB][0])
        console.log(user_Progress)
        pointer_for_Sub_Lesson_slide_count += 1

        if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('unlocked')) {
          $(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text(pointer_for_Sub_Lesson_slide_count);
          if (counter_for_wrong < 1) { Point_Value = parseInt(Point_Value) + 10 }
          else { Point_Value = parseInt(Point_Value) + 10 - counter_for_wrong }
          $('#Point_Value').text(Point_Value)
          $('#Point_Value_1').text(Point_Value)
          $.post("https://tcistudents.com/quizApi/update_metadata", { email: 'samudragupta201@gmail.com', progress_slides: JSON.stringify(user_Progress), pts: Point_Value },
            function (data) {
              console.log(data)
            });
        }
        counter_for_wrong = 0
      }
      else if (checked_1.length == 0) {
        counter_for_wrong += 1
        console.log('U have selected Nothing')
        $(`#right_wrong_${p}`).text('Please mark the answer in checkbox')
        $(`.Right_Wrong`).css('background-color', 'rgb(255,130,130)')
        $(`#right_wrong_${p}`).css('background-color', 'rgb(255,130,130)')
        $(`#gif_image_${p}`).hide()
        $(`.Right_Wrong`).show()
        $(`#right_wrong_${p}`).show()

        // function blink_text_3() {
        //   $(`#right_wrong_${p}`).fadeOut(250);
        //   $(`#right_wrong_${p}`).fadeIn(250);
        //   $(`#gif_image_${p}`).fadeOut();
        // }
        // setInterval(blink_text_3, 500);
        if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
          $(`#quill_hint_${p}`).show();
        }
        $(`#submit_button_${p}`).text('Try Again');
        setTimeout(function () {
          $(`#right_wrong_${p}`).hide();
          $(`.Right_Wrong`).hide()
        }, 4000)
        return;
      }
      else {
        if (Dict_for_Completed_Lessons.length != 0) {
          // let multiply = Dict_for_Completed_Lessons.length
          console.log('length of checked_1 = ' + checked_1.length)
          console.log('checked_1 = ' + checked_1)
          console.log(multiply)
          let card_value_1 = parseInt(checked_1[checked_1.length - 1] - (4 * multiply));
          console.log(card_value_1)
          var card_value = []
          card_value.push(card_value_1)
          if (JSON.stringify(card_value) == JSON.stringify(dic_value[4])) {
            console.log('GOOD')
            $(`#block_open_${p}`).hide();
            // $(`#gify_${p}`).show();
            // setTimeout(() => {
            // $(`#gify_${p}`).hide();
            $(`#block_open_${p}`).show();
            $(`#right_wrong_${p}`).text('Correct Answer')
            $(`.Right_Wrong`).css('background-color', '#324ed4')
            $(`#right_wrong_${p}`).css('background-color', '#324ed4')
            $(`#gif_image_${p}`).attr('src', 'img/giphy.png')
            $(`.Right_Wrong`).show()
            $(`#right_wrong_${p}`).show()
            $(`#gif_image_${p}`).show();
            if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
              $(`#quill_hint_${p}`).show();
            }
            $(`#submit_button_${p}`).text('Go Ahead');
            if (horizontal_PB == (Object.values(Dict_2).length - 1)) {
              $(`#submit_button_${p}`).text('Go to next chapter');
            }
            // }, 2000);
            setTimeout(function () {
              $(`#right_wrong_${p}`).hide()
              $(`.Right_Wrong`).hide()
            }, 4000)
            user_Progress.push(Object.values(Dict_2)[horizontal_PB][0])
            user_Progress_1.push(Object.values(Dict_2)[horizontal_PB][0])
            console.log(user_Progress)
            pointer_for_Sub_Lesson_slide_count += 1

            if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('unlocked')) {
              $(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text(pointer_for_Sub_Lesson_slide_count);
              if (counter_for_wrong < 1) { Point_Value = parseInt(Point_Value) + 10 }
              else { Point_Value = parseInt(Point_Value) + 10 - counter_for_wrong }
              $('#Point_Value').text(Point_Value)
              $('#Point_Value_1').text(Point_Value)
              $.post("https://tcistudents.com/quizApi/update_metadata", { email: 'samudragupta201@gmail.com', progress_slides: JSON.stringify(user_Progress), pts: Point_Value },
                function (data) {
                  console.log(data)
                });
            }
            counter_for_wrong = 0
          }
          else {
            counter_for_wrong += 1
            console.log('U have selected the wrong answer')
            $(`#right_wrong_${p}`).text('Wrong Answer')
            $(`#right_wrong_${p}`).css('background-color', 'rgb(255,130,130)')
            $(`.Right_Wrong`).css('background-color', 'rgb(255,130,130)')
            $(`#gif_image_${p}`).attr('src', 'img/wrong.png')
            $(`.Right_Wrong`).show()
            $(`#right_wrong_${p}`).show()
            $(`#gif_image_${p}`).show()
            // function blink_text_2() {
            //   $(`#right_wrong_${p}`).fadeOut(250);
            //   $(`#right_wrong_${p}`).fadeIn(250);
            //   $(`#gif_image_${p}`).fadeOut();
            // }
            // setInterval(blink_text_2, 500);
            if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
              $(`#quill_hint_${p}`).show();
            }
            $(`#submit_button_${p}`).text('Try Again');
            setTimeout(function () {
              $(`#right_wrong_${p}`).hide()
              $(`.Right_Wrong`).hide()
            }, 4000)
            return;
          }
        }
        else {
          counter_for_wrong += 1
          console.log('U have selected the wrong answer')
          $(`#right_wrong_${p}`).text('Wrong Answer')
          $(`#right_wrong_${p}`).css('background-color', 'rgb(255,130,130)')
          $(`.Right_Wrong`).css('background-color', 'rgb(255,130,130)')
          $(`#gif_image_${p}`).attr('src', 'img/wrong.png')
          $(`#gif_image_${p}`).show()
          $(`.Right_Wrong`).show()
          $(`#right_wrong_${p}`).show()
          // function blink_text_1() {
          //   $(`#right_wrong_${p}`).fadeOut(250);
          //   $(`#right_wrong_${p}`).fadeIn(250);
          //   $(`#gif_image_${p}`).fadeOut();
          // }
          // setInterval(blink_text_1, 500);
          if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
            $(`#quill_hint_${p}`).show();
          }
          $(`#submit_button_${p}`).text('Try Again');
          setTimeout(function () {
            $(`#right_wrong_${p}`).hide()
            $(`.Right_Wrong`).hide()
          }, 4000)
          return;
        }
      }
      clicks = 1;
    }
  }
  else if (clicks == 1) {
    horizontal_PB += 1
    console.log(horizontal_PB)
    // $(`#point_value_${p}`).text(Point_Value)
    clicks = 0;
    console.log('clicks = 0')
    next_slide()
  }
};


// Function for next slide

function next_slide() {
  $(`#right_wrong_${p}`).hide()
  $(`.Right_Wrong`).hide()
  if (horizontal_PB == Object.values(Dict_2).length) {
    setTimeout(function () {
      setTimeout(function () {
        $.post("https://tcistudents.com/quizApi/fetch_metadata", { email: 'samudragupta201@gmail.com' }, function (data) {
          Meta_Data = data
          console.log('Meta_Data')
          console.log(Meta_Data)
          if (Meta_Data[0][1] == null) {
            Point_Value = 0
          }
          else (
            Point_Value = parseInt(Meta_Data[0][0])
          )
        });
      }, 10)
      setTimeout(() => {
        pointer_for_Sub_Lesson_slide_count = 0
        $("input[type='checkbox'][name='type']").attr("checked", false);
        if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('unlocked')) {
          console.log('sub lesson is ended');
          $('.sl-module__header-panel').show();
          $(`#body_toggler_${p}`).show();
          $(`.sl-module__lesson_${p}`).hide();
          $('.container').show();
          $(`[id="Body_${Object.keys(Dict_1)}"]`).attr('style', 'background-color: #eaf0f3 !important');
          $(`[id="Status_${Object.keys(Dict_1)}"]`).empty();
          $(`[id="Status_${Object.keys(Dict_1)}"]`).removeClass('unlocked').addClass('completed');
          $(`[id="Status_${Object.keys(Dict_1)}"]`).append(`<div class="icon-wrapper completed">
                                                              <div class="icon-wrapper__icon completed"><i class="fa-solid fa-circle-check fa-2xl"></i></div>
                                                            </div>`);
          $(`[id="Completed_or_not_${Object.keys(Dict_1)}"]`).text(Object.values(Dict_2).length);
          if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('completed')) {
            for (var a = 0; a < Dict_3.length; a++) {
              console.log('abc')
              if (Object.keys(Dict_1)[0] == Dict_3[a][0]) {
                console.log('def')
                console.log(Object.keys(Dict_1)[0])
                console.log(Dict_3[a][0])
                $(`[id="Dot_${parseInt(Dict_3[a][2])}_${Dict_3[a][1]}"]`).append(`<style>[id="Dot_${parseInt(Dict_3[a][2])}_${Dict_3[a][1]}"]::before{background-color:#324ed4 !important;}</style>`);
                if (a != Dict_3.length - 1) {
                  $(`[id="Dot_${parseInt(Dict_3[a + 1][2])}_${Dict_3[a][1]}"]`).append(`<style>[id="Dot_${parseInt(Dict_3[a + 1][2])}_${Dict_3[a][1]}"]::before{background-color:#2493df !important;}</style>`);
                }
                break;
              }
            }
          }
          for (var e = 0; e < Dict_3.length; e++) {
            if (Object.keys(Dict_1) == Dict_3[e][0]) {
              console.log(Object.keys(Dict_1), Dict_3[e][1])
              if (e == (Dict_3.length - 1)) {
                multiply += 1
                for (var i = 0; i < Lessons.length; i++) {
                  if (Dict_3[e][1] == Lessons[i][0] && i != (Lessons.length - 1)) {
                    $(`[id="${Lessons[i][0]}"] .sl-module__avatar`).removeClass('inprogress').addClass('completed')
                    Call_Meta_Data()
                    console.log('call meta data fun is fully completed')
                    $(`[id="${Lessons[i + 1][0]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
                    for (var j = 0; j < Sub_Lessons.length; j++) {
                      console.log('for loop started')
                      console.log(Lessons[i + 1][0], Sub_Lessons[j][1])
                      if (Lessons[i + 1][0] == Sub_Lessons[j][1]) {
                        console.log(Sub_Lessons[j][1], Sub_Lessons[j][0], Lessons[i + 1][0], 'exact match')
                        $(`[id="Body_${Sub_Lessons[j][0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).empty();
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).removeClass('locked');
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).addClass('unlocked');
                        $(`[id="Status_${Sub_Lessons[j][0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                            <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                        </div>`);
                        break;
                      }
                    }
                  }
                  else if (Dict_3[e][1] == Lessons[i][0] && i == (Lessons.length - 1)) {
                    $(`[id="${Lessons[i][0]}"] .sl-module__avatar`).removeClass('inprogress').addClass('completed')
                  }
                }
              }
              else {
                $(`[id="Body_${Dict_3[e + 1][0]}"]`).attr('style', 'background-color: rgba(36,147,223,0.2) !important');
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).empty();
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).removeClass('locked');
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).addClass('unlocked');
                $(`[id="Status_${Dict_3[e + 1][0]}"]`).append(`<div class="icon-wrapper unlocked">
                                                            <div class="icon-wrapper__icon unlocked"><i class="fa-solid fa-circle-play fa-2xl"></i></div>
                                                        </div>`);
              }
            }
          }
          if (!$(`[id="${Lesson_ID[p]}"] .sl-module__avatar`).hasClass("completed")) {
            $(`[id="${Lesson_ID[p]}"] .sl-module__avatar`).removeClass('locked').addClass('inprogress')
          }
          var x = $(`[id="${Lesson_ID[p]}"] .icon-wrapper .completed`).length
          var y = $(`[id="${Lesson_ID[p]}"] .sl-group-item-status`).length
          var z = 163.36 - (((parseFloat((x * 100) / y)) * 163) / 100)
          console.log(x, y, z)
          $(`[id="${Lesson_ID[p]}"] .path`).attr("stroke-dashoffset", z)
        }
        else if ($(`[id="Status_${Object.keys(Dict_1)}"]`).hasClass('completed')) {
          $('.sl-module__header-panel').show();
          $(`#body_toggler_${p}`).show();
          $(`.sl-module__lesson_${p}`).hide();
          $('.container').show()
        }
      }, 200);

    }, 500)
    horizontal_PB = 0
    return
  }
  else if (Object.values(Dict_2)[horizontal_PB][3] == 'info') {
    $(`#submit_button_${p}`).text('Got it, Go ahead');
    if (horizontal_PB == (Object.values(Dict_2).length - 1)) {
      $(`#submit_button_${p}`).text('Go to next chapter');
    }
    $(`#For_MCQ_${p}`).hide();
    $(`#right_wrong_${p}`).hide()
    $(`.Right_Wrong`).hide()
    $(`#quill_reader_${p}`).height(200);
    $(`#slide_header_name_${p}`).text(Object.values(Dict_2)[horizontal_PB][2]);
    $(`#progBar_${p}`).attr('value', horizontal_PB + 1);
    $(`#progBar_${p}`).attr('max', Object.values(Dict_2).length);
    $(`#sl-module__progress_value_${p}`).text(horizontal_PB + 1);
    $(`#sl-module__progress_max_value_${p}`).text(Object.values(Dict_2).length);
    let temp = JSON.parse(Object.values(Dict_2)[horizontal_PB][5])
    quill.setContents(temp);
    let temp_1 = JSON.parse(Object.values(Dict_2)[horizontal_PB][7])
    quill_1.setContents(temp_1);
    if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
      $(`#quill_hint_${p}`).show();
    }
    else {
      $(`#quill_hint_${p}`).hide();
    }
    if ($(`[id="Status_${JSON.parse(Object.values(Dict_2)[horizontal_PB][1])}"]`).hasClass('completed')) {
      clicks = 1;
    }
  }
  else if (Object.values(Dict_2)[horizontal_PB][3] == 'mcq') {
    if ($(`[id="Status_${JSON.parse(Object.values(Dict_2)[horizontal_PB][1])}"]`).hasClass('completed')) {
      console.log('U R Inside Completed Sub_Lessons')
      clicks = 1;
      $(`#submit_button_${p}`).text('Go ahead');
      $(`#For_MCQ_${p}`).show();
      $(`#quill_reader_${p}`).height(100);
      $(`#Form_${p}`).empty();
      $(`.Right_Wrong`).css('background-color', '#324ed4')
      $(`#right_wrong_${p}`).css('background-color', '#324ed4')
      $(`#right_wrong_${p}`).text('Correct Answer')
      $(`#gif_image_${p}`).attr('src', 'img/giphy.png')
      $(`.Right_Wrong`).show()
      $(`#right_wrong_${p}`).show()
      $(`#gif_image_${p}`).show()
      $(`#slide_header_name_${p}`).text(Object.values(Dict_2)[horizontal_PB][2]);
      $(`#progBar_${p}`).attr('value', horizontal_PB + 1);
      $(`#progBar_${p}`).attr('max', Object.values(Dict_2).length);
      $(`#sl-module__progress_value_${p}`).text(horizontal_PB + 1);
      $(`#sl-module__progress_max_value_${p}`).text(Object.values(Dict_2).length);
      let dict = JSON.parse(Object.values(Dict_2)[horizontal_PB][6])
      let dict_value = Object.values(dict)
      console.log(dict_value)
      console.log(dict_value[4]);
      for (var a = 1; a < dict_value.length; a++) {
        if (dict_value[a - 1] != '') {
          var $ctrl_a = $('<label />').html(' ' + dict_value[a - 1]).prepend($('<input/>').attr({ type: 'checkbox', name: "type", id: `checkbox_${a}` }));
          $(`#Form_${p}`).append($ctrl_a);
        }
      }
      for (var a = 0; a < dict_value[4].length; a++) {
        if (dict_value[4][a] != '') {
          $(`input[type='checkbox'][name='type'][id='checkbox_${dict_value[4][a]}']`).attr("checked", true);
        }
      }
      let temp = JSON.parse(Object.values(Dict_2)[horizontal_PB][5])
      quill.setContents(temp);
      let temp_1 = JSON.parse(Object.values(Dict_2)[horizontal_PB][7])
      quill_1.setContents(temp_1);
      if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
        $(`#quill_hint_${p}`).show();
      }
      else {
        $(`#quill_hint_${p}`).hide();
      }
    }
    else {
      let count_1 = 0;
      console.log('count_1 = ' + count_1)
      if (user_Progress_1.length != 0) {
        for (var i = 0; i < user_Progress_1.length; i++) {
          if (Object.values(Dict_2)[horizontal_PB][0] == user_Progress_1[i]) {
            console.log('clicks = ' + clicks)
            count_1 = 1;
            $(`#submit_button_${p}`).text('Go ahead');
            $(`#For_MCQ_${p}`).show();
            $(`#quill_reader_${p}`).height(100);
            $(`#Form_${p}`).empty();
            $(`.Right_Wrong`).css('background-color', '#324ed4')
            $(`#right_wrong_${p}`).css('background-color', '#324ed4')
            $(`#right_wrong_${p}`).text('Correct Answer')
            $(`#gif_image_${p}`).attr('src', 'img/giphy.png')
            $(`.Right_Wrong`).show()
            $(`#right_wrong_${p}`).show()
            $(`#gif_image_${p}`).show()
            $(`#slide_header_name_${p}`).text(Object.values(Dict_2)[horizontal_PB][2]);
            $(`#progBar_${p}`).attr('value', horizontal_PB + 1);
            $(`#progBar_${p}`).attr('max', Object.values(Dict_2).length);
            $(`#sl-module__progress_value_${p}`).text(horizontal_PB + 1);
            $(`#sl-module__progress_max_value_${p}`).text(Object.values(Dict_2).length);
            let dict = JSON.parse(Object.values(Dict_2)[horizontal_PB][6])
            let dict_value = Object.values(dict)
            console.log(dict_value)
            console.log(dict_value[4]);
            for (var a = 1; a < dict_value.length; a++) {
              if (dict_value[a - 1] != '') {
                var $ctrl_a = $('<label />').html(' ' + dict_value[a - 1]).prepend($('<input/>').attr({ type: 'checkbox', name: "type", id: `checkbox_${a}` }));
                $(`#Form_${p}`).append($ctrl_a);
              }
            }
            for (var a = 0; a < dict_value[4].length; a++) {
              if (dict_value[4][a] != '') {
                $(`input[type='checkbox'][name='type'][id='checkbox_${dict_value[4][a]}']`).attr("checked", true);
              }
            }
            let temp = JSON.parse(Object.values(Dict_2)[horizontal_PB][5])
            quill.setContents(temp);
            let temp_1 = JSON.parse(Object.values(Dict_2)[horizontal_PB][7])
            quill_1.setContents(temp_1);
            if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
              $(`#quill_hint_${p}`).show();
            }
            else {
              $(`#quill_hint_${p}`).hide();
            }
            clicks = 1;
            console.log('clicks = 1')
            console.log('u r inside the user_progress array')
          }
        }
      }
      if (count_1 == 1) { return }
      $(`#submit_button_${p}`).text('Submit');
      $(`#For_MCQ_${p}`).show();
      $(`#quill_hint_${p}`).hide();
      $(`#quill_reader_${p}`).height(100);
      $(`#Form_${p}`).empty();
      $(`#slide_header_name_${p}`).text(Object.values(Dict_2)[horizontal_PB][2]);
      $(`#progBar_${p}`).attr('value', horizontal_PB + 1);
      $(`#progBar_${p}`).attr('max', Object.values(Dict_2).length);
      $(`#sl-module__progress_value_${p}`).text(horizontal_PB + 1);
      $(`#sl-module__progress_max_value_${p}`).text(Object.values(Dict_2).length);
      let dict = JSON.parse(Object.values(Dict_2)[horizontal_PB][6])
      let dict_value = Object.values(dict)
      console.log(dict_value)
      console.log(dict_value[4]);
      for (var a = 1; a < dict_value.length; a++) {
        if (dict_value[a - 1] != '') {
          var $ctrl_a = $('<label />').html(' ' + dict_value[a - 1]).prepend($('<input/>').attr({ type: 'checkbox', name: "type", id: `checkbox_${a}_${Object.values(Dict_2)[horizontal_PB][0]}` }));
          $(`#Form_${p}`).append($ctrl_a);
        }
      }
      let temp = JSON.parse(Object.values(Dict_2)[horizontal_PB][5])
      quill.setContents(temp);
      let temp_1 = JSON.parse(Object.values(Dict_2)[horizontal_PB][7])
      quill_1.setContents(temp_1);
    }
    console.log('clicks = ' + clicks)
  }
}


// Function for Going to previous slide

function Back() {
  if (horizontal_PB == 0) {
    GoBack()
  }
  else if (Object.values(Dict_2)[horizontal_PB - 1][3] == 'info') {
    $(`#submit_button_${p}`).text('Got it, Go ahead');
    $(`#For_MCQ_${p}`).hide();
    $(`#right_wrong_${p}`).hide()
    $(`.Right_Wrong`).hide()
    $(`#slide_header_name_${p}`).text(Object.values(Dict_2)[horizontal_PB - 1][2]);
    $(`#progBar_${p}`).attr('value', horizontal_PB + 1 - 1);
    $(`#progBar_${p}`).attr('max', Object.values(Dict_2).length);
    $(`#sl-module__progress_value_${p}`).text(horizontal_PB + 1 - 1);
    $(`#sl-module__progress_max_value_${p}`).text(Object.values(Dict_2).length);
    let temp = JSON.parse(Object.values(Dict_2)[horizontal_PB - 1][5])
    quill.setContents(temp);
    let temp_1 = JSON.parse(Object.values(Dict_2)[horizontal_PB - 1][7])
    quill_1.setContents(temp_1);
    if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
      $(`#quill_hint_${p}`).show();
    }
    else {
      $(`#quill_hint_${p}`).hide();
    }
    user_Progress.pop(Object.values(Dict_2)[horizontal_PB][0]);
    horizontal_PB -= 1;
    // Point_Value -= 1;
    // $(`#point_value_${p}`).text(Point_Value + 1)
  }
  else if (Object.values(Dict_2)[horizontal_PB - 1][3] == 'mcq') {
    $(`#submit_button_${p}`).text('Go ahead');
    $(`#For_MCQ_${p}`).show();
    $(`#quill_reader_${p}`).height(100);
    $(`#Form_${p}`).empty();
    $(`#slide_header_name_${p}`).text(Object.values(Dict_2)[horizontal_PB - 1][2]);
    $(`#progBar_${p}`).attr('value', horizontal_PB + 1 - 1);
    $(`#progBar_${p}`).attr('max', Object.values(Dict_2).length);
    $(`#sl-module__progress_value_${p}`).text(horizontal_PB + 1 - 1);
    $(`#sl-module__progress_max_value_${p}`).text(Object.values(Dict_2).length);
    let dict = JSON.parse(Object.values(Dict_2)[horizontal_PB - 1][6])
    let dict_value = Object.values(dict)
    console.log(dict_value)
    console.log(dict_value[4]);
    for (var a = 1; a < dict_value.length; a++) {
      if (dict_value[a - 1] != '') {
        var $ctrl_a = $('<label />').html(' ' + dict_value[a - 1]).prepend($('<input/>').attr({ type: 'checkbox', name: "type", id: `checkbox_${a}` }));
        $(`#Form_${p}`).append($ctrl_a);
      }
    }
    for (var a = 0; a < dict_value[4].length; a++) {
      if (dict_value[4][a] != '') {
        $(`input[type='checkbox'][name='type'][id='checkbox_${dict_value[4][a]}']`).attr("checked", true);
      }
    }
    let temp = JSON.parse(Object.values(Dict_2)[horizontal_PB - 1][5])
    quill.setContents(temp);
    let temp_1 = JSON.parse(Object.values(Dict_2)[horizontal_PB - 1][7])
    quill_1.setContents(temp_1);
    if (!(quill_1.getLength() < 2) || quill_1.getText() != '\n') {
      $(`#quill_hint_${p}`).show();
    }
    else {
      $(`#quill_hint_${p}`).hide();
    }
    $(`#right_wrong_${p}`).text('Correct Answer')
    $(`#right_wrong_${p}`).css('background-color', '#324ed4')
    $(`.Right_Wrong`).css('background-color', '#324ed4')
    $(`#gif_image_${p}`).attr('src', 'img/giphy.png')
    $(`#right_wrong_${p}`).show()
    $(`#gif_image_${p}`).show()
    $(`.Right_Wrong`).show()
    user_Progress.pop(Object.values(Dict_2)[horizontal_PB][0]);
    horizontal_PB -= 1;
  }
  clicks = 1;
}




// Function for Back arrow(->)

function GoBack() {
  $('.container').show();
  $(`#body_toggler_${p}`).show();
  $(`.sl-module__lesson_${p}`).hide();
  $('.sl-module__header-panel').show();
}

$(document).ready(function () {

  multiply = 0
  Dict_5 = []
  Point_Value = 0
  counter_for_Sub_Lesson_toggler = 1
  temp_for_lesson = 0
  pointer_for_Sub_Lesson_slide_count = 0
  counter_for_Sub_Lesson_slide_count = 0
  counter_for_Meta_Data_slide_count = 0
  horizontal_PB = 0
  horizontal_PB_1 = 0
  position = 0;
  clicks = 0;
  user_Progress = [];
  user_Progress_1 = [];
  counter_for_wrong = 0
  Dict_for_Completed_Lessons = []
  Dict_for_count_for_Sub_lessons_slide = {}
  key_for_Dict_for_count_for_Sub_lessons_slide = []
  value_for_Dict_for_count_for_Sub_lessons_slide = []
  Dict_for_count_for_Meta_Data_slide = {}
  key_for_Dict_for_count_for_Meta_Data_slide = []
  value_for_Dict_for_count_for_Meta_Data_slide = []
  Original_value_for_Dict_for_count_for_Meta_Data_slide = []

  $.ajaxSetup({ async: false });  // to stop async 


  // Fetch User Progress
  $.post("https://tcistudents.com/quizApi/fetch_metadata", { email: 'samudragupta201@gmail.com' }, function (data) {
    Meta_Data = data
    console.log('Meta_Data')
    console.log(Meta_Data)
    if (Meta_Data[0][1] == null) {
      Point_Value = 0
      $('#Point_Value').text(Point_Value);
      $('#Point_Value_1').text(Point_Value)
    }
    else {
      Point_Value = parseInt(Meta_Data[0][0])
      $('#Point_Value').text(Point_Value);
      $('#Point_Value_1').text(Point_Value)
    }
  });

  // Fetching quiz Access for a specific User
  $.post("https://tcistudents.com/quizApi/fetch_quiz_access", { email: 'samudragupta201@gmail.com' }, function (data) {
    Quiz_Access = data
    console.log('Quiz_Access')
    console.log(Quiz_Access)
  });

  // Fetching List of Lessons
  $.post("https://tcistudents.com/quizApi/fetch_lessons", { email: 'samudragupta201@gmail.com' }, function (data) {
    Lessons = data
    console.log('Lessons')
    console.log(Lessons)
  });


  // Fetching List of Sub Lessons
  $.post("https://tcistudents.com/quizApi/fetch_sub_lesson", { email: 'samudragupta201@gmail.com' }, function (data) {
    // Sorting of the data(Sub_Lesson) according to the Sequence
    data.sort(function (a, b) {
      return a[2] - b[2]
    });
    Sub_Lessons = data
    console.log('sub_Lessons')
    console.log(Sub_Lessons)
    Dict_for_Sub_Lessons_Seq = []
    for (var i = 0; i < Sub_Lessons.length; i++) {
      Dict_for_Sub_Lessons_Seq.push(parseInt(Sub_Lessons[i][2]))
      if (i != Sub_Lessons.length - 1) {
        if (parseInt(Sub_Lessons[i][2]) == parseInt(Sub_Lessons[i + 1][2])) {
          Dict_for_Sub_Lessons_Seq.pop(parseInt(Sub_Lessons[i][2]))
        }
      }
    }
    console.log(Dict_for_Sub_Lessons_Seq)
  });

  // Fetching Slide Data
  $.post("https://tcistudents.com/quizApi/fetch_slide_data", { email: 'samudragupta201@gmail.com' }, function (data) {
    // Sorting of the data(Sub_Lesson_Slide) according to the Slide_Sequence
    data.sort(function (a, b) {
      return a[4] - b[4]
    });
    Sub_Lessons_Slide = data
    console.log('sub_lessons_slide')
    console.log(Sub_Lessons_Slide)
  })


  // Creating a dict. {key: value} where key is '(Lesson_Category)Lessons[2nd Index]=[f,p1,p2,op]' & value is 'Quiz_Access=[1 or 0]'
  keys = ['f', 'p1', 'p2', 'op']
  values = []
  for (var i = 0; i < Quiz_Access[0].length; i++) {
    values.push(parseInt(Quiz_Access[0][i]))
  }
  result = {};
  keys.forEach((key, i) => result[key] = values[i]);
  console.log(result);

  // Storing all the lessons_ID
  Lesson_ID = []
  for (var a = 0; a < Lessons.length; a++) {
    Lesson_ID.push(Lessons[a][0]);
  }

  // Storing all the Sub Lessons ID
  Sub_Lesson_ID = []
  for (var a = 0; a < Sub_Lessons.length; a++) {
    Sub_Lesson_ID.push(Sub_Lessons[a][0]);
  }

  // Appending Lessons in the DOM if Quiz_Access value is 1
  Quiz_Module()
})