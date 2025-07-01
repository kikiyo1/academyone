import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Plus, Save, Settings, Package, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AdminStats from '@/components/admin/AdminStats.jsx';
import ProductList from '@/components/admin/ProductList.jsx';
import ProductForm from '@/components/admin/ProductForm.jsx';
import UserManagement from '@/components/admin/UserManagement.jsx';

const AdminPanel = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({ registrationUrl: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedProducts = localStorage.getItem('hadeAcademyProducts');
    if (savedProducts) setProducts(JSON.parse(savedProducts));
    
    const savedUsers = localStorage.getItem('hadeAcademyUsers');
    if (savedUsers) setUsers(JSON.parse(savedUsers));

    const savedSettings = localStorage.getItem('hadeAcademySettings');
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  };

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    saveData('hadeAcademySettings', settings);
    toast({ title: "Berhasil!", description: "Pengaturan berhasil disimpan!" });
  };

  const handleFormSubmit = (formData) => {
    let updatedProducts;
    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? { ...formData, id: p.id } : p);
      toast({ title: "Berhasil!", description: "Pelatihan berhasil diperbarui!" });
    } else {
      updatedProducts = [...products, { ...formData, id: Date.now() }];
      toast({ title: "Berhasil!", description: "Pelatihan baru berhasil ditambahkan!" });
    }
    setProducts(updatedProducts);
    saveData('hadeAcademyProducts', updatedProducts);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    saveData('hadeAcademyProducts', updatedProducts);
    toast({ title: "Berhasil!", description: "Pelatihan berhasil dihapus!" });
  };

  const openNewProductForm = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveData('hadeAcademyUsers', updatedUsers);
    toast({ title: "Berhasil!", description: "Member baru berhasil ditambahkan." });
  };

  const deleteUser = (userEmail) => {
    const updatedUsers = users.filter(user => user.email !== userEmail);
    setUsers(updatedUsers);
    saveData('hadeAcademyUsers', updatedUsers);
    toast({ title: "Berhasil!", description: "Member berhasil dihapus." });
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel - HADE ACADEMY</title>
        <meta name="description" content="Panel administrasi untuk mengelola konten HADE ACADEMY" />
      </Helmet>

      <div className="min-h-screen gradient-bg">
        <div className="glass-effect border-b border-white/20 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center text-white hover:text-purple-300 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Website
              </Link>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdminStats products={products} />

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="products"><Package className="w-4 h-4 mr-2" />Kelola Pelatihan</TabsTrigger>
              <TabsTrigger value="users"><Users className="w-4 h-4 mr-2" />Kelola Pengguna</TabsTrigger>
              <TabsTrigger value="settings"><Settings className="w-4 h-4 mr-2" />Pengaturan</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Daftar Pelatihan</h2>
                  <Button onClick={openNewProductForm} className="btn-gradient text-white border-0">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Pelatihan
                  </Button>
                </div>
                <ProductList products={products} handleEdit={handleEdit} handleDelete={handleDelete} />
              </div>
            </TabsContent>
            <TabsContent value="users">
              <div className="glass-effect rounded-xl p-6">
                <UserManagement users={users} addUser={addUser} deleteUser={deleteUser} />
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Pengaturan Umum</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="registrationUrl" className="text-white">URL Pendaftaran (mayar.id)</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="registrationUrl"
                        name="registrationUrl"
                        value={settings.registrationUrl}
                        onChange={handleSettingsChange}
                        placeholder="https://mayar.id/..."
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                      <Button onClick={handleSaveSettings} className="btn-gradient text-white border-0">
                        <Save className="w-4 h-4 mr-2" />
                        Simpan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <ProductForm 
        isOpen={isFormOpen}
        setIsOpen={setIsFormOpen}
        editingProduct={editingProduct}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default AdminPanel;