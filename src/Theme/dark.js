
  
import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
// A custom theme for this app


const theme = createMuiTheme({
    palette: {
      type :"dark",
      primary: {
        main: grey[800],
      },
      secondary: {
        main: grey[300]
      },
    },
    overrides:{
      MuiOutlinedInput:{
        notchedOutline:{
          borderColor:"white !important"
        },

      },
      MuiFormLabel:{
        root:{
            color:"white !important"
        },
      }
    }
  })

  

export default theme