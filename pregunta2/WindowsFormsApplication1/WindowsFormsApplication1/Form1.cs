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
    public partial class Form1 : Form
    {

        String ci = "", nom = "", pat = "", mat = "";
        int pra = 0, prg = 0;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            cargar();
        }

        private void insertar_Click(object sender, EventArgs e)
        {
            Insertar ins = new Insertar();
            ins.Show();
        }

        private void editar_Click(object sender, EventArgs e)
        {        
            if (!ci.Equals(""))
            {
                Editar edi = new Editar(ci, nom, pat, mat, pra, prg);
                edi.Show();
                ci = "";
            }
            else
            {
                MessageBox.Show("Seleccione un alumno");
            }
        }

        private void eliminar_Click(object sender, EventArgs e)
        {
            if (!ci.Equals(""))
            {
                Eliminar eli = new Eliminar(ci);
                eli.Show();
                ci = "";
            }
            else
            {
                MessageBox.Show("Seleccione un alumno");
            }
        }

        private void actualizar_Click(object sender, EventArgs e)
        {
            cargar();
        }

        public void cargar()
        {
            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            DataSet ds = new DataSet();
            ds = ws.tblAlumno();
            dataGridView1.DataSource = ds.Tables[0]; 
        }

        private void Seleccionar(object sender, DataGridViewCellMouseEventArgs e)
        {
            int indice = e.RowIndex;

            ci = dataGridView1.Rows[indice].Cells[0].Value.ToString();
            nom = dataGridView1.Rows[indice].Cells[1].Value.ToString();
            pat = dataGridView1.Rows[indice].Cells[2].Value.ToString();
            mat = dataGridView1.Rows[indice].Cells[3].Value.ToString();

            if(dataGridView1.Rows[indice].Cells[4].Value.ToString() != "")
                pra = Convert.ToInt32(dataGridView1.Rows[indice].Cells[4].Value.ToString());

            if (dataGridView1.Rows[indice].Cells[5].Value.ToString() != "")
                prg = Convert.ToInt32(dataGridView1.Rows[indice].Cells[5].Value.ToString());
        }
    }
}
