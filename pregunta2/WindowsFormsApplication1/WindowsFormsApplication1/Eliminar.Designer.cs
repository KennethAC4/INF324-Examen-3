﻿namespace WindowsFormsApplication1
{
    partial class Eliminar
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.acpetar = new System.Windows.Forms.Button();
            this.rechazr = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(13, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(129, 17);
            this.label1.TabIndex = 0;
            this.label1.Text = "Eliminar al registro:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(148, 13);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(46, 17);
            this.label2.TabIndex = 1;
            this.label2.Text = "label2";
            // 
            // acpetar
            // 
            this.acpetar.Location = new System.Drawing.Point(38, 72);
            this.acpetar.Name = "acpetar";
            this.acpetar.Size = new System.Drawing.Size(101, 36);
            this.acpetar.TabIndex = 2;
            this.acpetar.Text = "Aceptar";
            this.acpetar.UseVisualStyleBackColor = true;
            this.acpetar.Click += new System.EventHandler(this.acpetar_Click);
            // 
            // rechazr
            // 
            this.rechazr.Location = new System.Drawing.Point(145, 72);
            this.rechazr.Name = "rechazr";
            this.rechazr.Size = new System.Drawing.Size(101, 36);
            this.rechazr.TabIndex = 3;
            this.rechazr.Text = "Rechazar";
            this.rechazr.UseVisualStyleBackColor = true;
            this.rechazr.Click += new System.EventHandler(this.rechazr_Click);
            // 
            // Eliminar
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(282, 253);
            this.Controls.Add(this.rechazr);
            this.Controls.Add(this.acpetar);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Eliminar";
            this.Text = "Eliminar";
            this.Load += new System.EventHandler(this.Eliminar_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button acpetar;
        private System.Windows.Forms.Button rechazr;
    }
}