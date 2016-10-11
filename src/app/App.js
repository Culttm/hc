// import '../sass/app.scss'
import $ from 'jquery'

const ORIGIN = 'https://letyshops.zendesk.com/api/v2/'
const SUFFIX = 'help_center/ru/'
const SECTIONS = `${ORIGIN}${SUFFIX}sections`


const sectionsListTemplate = require("./tpls/sections-list.hbs");
const articlesListTemplate = require("./tpls/articles-list.hbs");
const preloader = require("./tpls/preloader.hbs");


let getSections = (cb) => {

  $('#sections').html(preloader())


  $.ajax({
    type: 'GET',
    url: SECTIONS
  }).done(response=>{

    $('#sections').html(sectionsListTemplate(response))

    let initialSection = response.sections[0];

    if(typeof cb == 'function') cb(initialSection)

  })

}


let getArticles = (data, cb) => {

  $('#articles').html(preloader())

  $.get(`${ORIGIN}${SUFFIX}sections/${data.id}/articles`, response => {

    let articlesList = {};

    articlesList.sectionTitle = data.name;
    articlesList.data = response;

    $('#articles').html(articlesListTemplate(articlesList))

    if(typeof cb == 'function') cb(response)

  })
}

getSections((data)=>getArticles(data));

$(document).on('click', '[data-section]', function(e){

  e.preventDefault();

  let id = $(this).data('section'),
      name = $(this).data('name');

  let data = {
    id: id,
    name: name
  }

  getArticles(data)

})
