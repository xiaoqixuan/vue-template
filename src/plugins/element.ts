import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss';
import {
  Message,
  Button,
  Input,
  Icon,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Progress,
  Dialog,
  Divider,
  Checkbox,
  MessageBox,
  Tabs,
  TabPane,
  Col,
  Row,
  Menu,
  Submenu,
  MenuItem,
  Avatar,
  Popover,
  Pagination,
  Loading,
  Breadcrumb,
  BreadcrumbItem,
  Rate,
  Form,
  FormItem,
  Select,
  Option,
  Carousel,
  CarouselItem,
  Radio,
  RadioGroup,
  Upload,
  DatePicker,
  Badge,
  Timeline,
  TimelineItem,
  InputNumber,
  Table,
  TableColumn,
  RadioButton,
  Cascader,
  Tooltip,
} from 'element-ui';

import VueLazyload from 'vue-lazyload'; // 懒加载组件

Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Link);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Progress);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Checkbox);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Col);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Avatar);
Vue.use(Popover);
Vue.use(Pagination);
Vue.use(Loading.directive);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Rate);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Upload);
Vue.use(DatePicker);
Vue.use(Badge);
Vue.use(Row);
Vue.use(Col);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(InputNumber);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(RadioButton);
Vue.use(Cascader);
Vue.use(Tooltip);
Vue.use(Cascader);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll', 'wheel', 'mousewheel'],
});
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
