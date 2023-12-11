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
    public partial class Editar : Form
    {

        String car, nam, app, apm;
        int apr, gnr;

        public Editar(String ci, String nom, String pat, String mat, int pra, int prg)
        {
            InitializeComponent();

            car = ci;
            nam = nom;
            app = pat;
            apm = mat;
            apr = pra;
            gnr = prg;
        }

        private void Editar_Load(object sender, EventArgs e)
        {
            textBox2.Text = nam;
            textBox3.Text = app;
            textBox4.Text = apm;
            textBox5.Text = apr + "";
            textBox6.Text = gnr + "";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Boolean lleno = textBox2.Text.Length != 0 && textBox3.Text.Length != 0 && textBox4.Text.Length != 0 && textBox5.Text.Length != 0 && textBox6.Text.Length != 0;

            if (lleno)
            {
                nam = textBox2.Text.ToString();
                app = textBox3.Text.ToString();
                apm = textBox4.Text.ToString();
                int apr = Convert.ToInt32(textBox5.Text.ToString());
                int gnr = Convert.ToInt32(textBox6.Text.ToString());

                ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
                ws.actAlumno(car, nam, app, apm, apr, gnr);

                this.Close();
            }
            else
            {
                MessageBox.Show("Por favor llene los campos");
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
