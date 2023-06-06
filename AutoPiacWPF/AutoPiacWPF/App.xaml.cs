using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;

namespace AutoPiacWPF
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        private void Login(object sender,StartupEventArgs e)
        {
            Login login=new Login();
            Application.Current.MainWindow = login;
            MainWindow window = new MainWindow();
            login.ShowDialog();
            window.Show();
        }
    }
}
