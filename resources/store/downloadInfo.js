export const state = () => ({
  type: null,
  title: null
})

export const mutations = {
  init(state, value) {
    state.type = value.type

    switch (value.type) {
      case 'downloadMod':
        state.title = value.modName
        break
      case 'downloadMission':
        state.title = value.missionName
        break
    }
  },

  stop(state, code) {
    if (!code || code === 0) {
      switch (state.type) {
        case 'updateServer':
          this.app.$snackbar({
            type: 'success',
            message: this.app.i18n.t('download.serverUpdated')
          })
          break
        case 'downloadMod':
          this.app.$snackbar({
            type: 'success',
            message: this.app.i18n.t('download.modDownloaded')
          })
          break
        case 'downloadMission':
          this.app.$snackbar({
            type: 'success',
            message: this.app.i18n.t('download.missionDownloaded')
          })
          break
      }
    } else if (code === 5) {
      this.app.$snackbar({
        type: 'error',
        message: this.app.i18n.t('download.steamGuardCodeError')
      })
    } else if (code === 8) {
      this.app.$snackbar({
        type: 'error',
        message: this.app.i18n.t('download.diskSpaceError')
      })
    }

    state.type = null
    state.title = null
  }
}
