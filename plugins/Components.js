import Vue from 'vue'
import CategoriesGrid from '../components/grids/CategoriesGrid'
import AuthorsGrid from '../components/grids/AuthorsGrid'
import DisqusComments from '../components/DisqusComments'
import IntersectionObserver from '../components/IntersectionObserver'
import LoadingSpinner from '../components/LoadingSpinner'
import MainSection from '../components/MainSection'
import NewsLetterSlideOut from '../components/NewsLetterSlideOut'
import PostsGrid from '../components/grids/PostsGrid'
import SiteFooter from '../components/SiteFooter'
import SiteHero from '../components/SiteHero'
import SiteNav from '../components/SiteNav'
import ResourceGrid from '~/components/grids/ResourceGrid'

Vue.component(CategoriesGrid.name, CategoriesGrid)
Vue.component(AuthorsGrid.name, AuthorsGrid)
Vue.component(DisqusComments.name, DisqusComments)
Vue.component(IntersectionObserver.name, IntersectionObserver)
Vue.component(LoadingSpinner.name, LoadingSpinner)
Vue.component(MainSection.name, MainSection)
Vue.component(NewsLetterSlideOut.name, NewsLetterSlideOut)
Vue.component(PostsGrid.name, PostsGrid)
Vue.component(SiteFooter.name, SiteFooter)
Vue.component(SiteHero.name, SiteHero)
Vue.component(SiteNav.name, SiteNav)
Vue.component(ResourceGrid.name, ResourceGrid)
