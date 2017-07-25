<template>
  <form class="basic-setting fr">
    <div><legend class="fl">昵称</legend><input type="text"></div>
    <div><legend class="fl">手机号</legend><input type="text"></div>
    <div><legend class="fl">邮箱</legend><input type="text"></div>
    <div><legend class="fl">真实姓名</legend><input type="text"></div>
    <div><legend class="fl">最后学历</legend><input type="text"></div>
    <div><legend class="fl">通讯地址</legend><input type="text"></div>
    <div class="sex">
      <legend class="fl">性别</legend>
      <span class="icon1 icon"></span><input type="radio" name="sex">
      <span class="icon2 icon"></span><input type="radio" name="sex">
      <span class="secret">保密</span><input type="radio" name="sex">
    </div>
    <div><legend class="fl">专业</legend><input type="text"></div>
    <div>
      <legend class="fl">生日</legend>
      <select name="" id="">
        <option>1990</option>
        <option>1991</option>
        <option>1992</option>
        <option>1993</option>
        <option>1994</option>
        <option>1995</option>
        <option>1996</option>
        <option>1997</option>
        <option>1998</option>
        <option>1999</option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
      </select>年
      <select name="" id="">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>月
      <select name="" id="">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
      </select>日
    </div><br />
    <div>
      <legend class="fl">简介</legend>
      <textarea name="" id="" cols="41" rows="10"></textarea>
    </div>
  </form>
</template>
<script>
  export default{
    name: 'basicSetting'
  }
</script>
<style scoped>
*{box-sizing: content-box}
  .basic-setting{
    margin-top:10px;
    width: 836px;
    height: 705px;
    padding: 25px;
    border: 2px solid rgb(189,204,212);
  }
  .basic-setting div{
    margin-bottom: 15px;
  }
  .basic-setting legend{
    display: inline-block;
    width: 80px;
    font-size: 18px;
    text-align: right;
    line-height: 35px;
    padding-right: 20px;
  }
  .basic-setting input[type="text"]{
    width: 300px;
    height: 35px;
    border: 2px solid rgb(189,204,212);
  }
  .basic-setting input[type="radio"]{
    margin-right: 20px
  }
  .basic-setting textarea{
    resize: none;
    border: 2px solid rgb(189,204,212);
  }
  .basic-setting .sex .icon{
    display: inline-block;
    width: 26px;
    height: 26px;
    background:url("../../public-image/qietu2.png");
    vertical-align: bottom;margin-right: 5px;
  }
  .basic-setting .sex .secret{
    margin-right: 5px;
  }
  .basic-setting .sex .icon1{
    background-position: -58px -293px;
  }
  .basic-setting .sex .icon2{
    background-position: -102px -293px;
  }
  .basic-setting select{
    width: 81px;height: 35px;
    border: 2px solid rgb(189,204,212);
  }
</style>