<template>
  <div class="app-continer">
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name" />
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" />
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <el-option :value="1" label="高级讲师" />
          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career" />
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea" />
      </el-form-item>
      <!-- 讲师头像：TODO -->
      
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import teacher from "@/api/edu/teacher.js";

export default {
  data () {
    return {
      teacher: {},
      saveBtnDisabled: false,

    }
  },
  methods: {
    saveOrUpdate () {
      if (this.teacher.id) {
        this.saveBtnDisabled = true
        this.editData()
      } else {
        this.saveBtnDisabled = true
        this.saveData()
      }
    },

    saveData () {
      teacher.saveTea(this.teacher).then(response => {
        this.$message({
          type: "success",
          message: "添加成功!",
        });
        this.$router.push({ path: '/teacher/table' })
      })
    }
    ,
    getInfo (id) {
      teacher.getTeaInfo(id).then(response => {
        this.teacher = response.data.teacher
      })
    },
    editData () {
      teacher.editTea(this.teacher).then(response => {
        this.$message({
          type: "success",
          message: "修改成功!",
        });
        this.$router.push({ path: '/teacher/table' })
      })
    },
    init () {
      if (this.$route.params && this.$route.params.id) {
        const id = this.$route.params.id
        this.getInfo(id)
      }
    }


  },
  created () {
    this.init()
  }
  , watch: {
    $route (to, from) {
      this.init()
    }
  }
}
</script>