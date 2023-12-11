using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Eliminar : Form
    {
        String car;

        public Eliminar(String ci)
        {
            InitializeComponent();
            car = ci;
        }

        private void Eliminar_Load(object sender, EventArgs e)
        {
            label2.Text = car;
        }

        private void acpetar_Click(object sender, EventArgs e)
        {
            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            ws.eliAlumno(car);

            this.Close();
        }

        private void rechazr_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
