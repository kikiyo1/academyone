import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Trash2, Upload, Save, Youtube } from 'lucide-react';

const ProductForm = ({ isOpen, setIsOpen, editingProduct, onFormSubmit }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    originalPrice: '',
    features: [''],
    checkoutUrl: '',
    youtubeUrl: '',
    isPopular: false,
    image: null
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        price: editingProduct.price,
        originalPrice: editingProduct.originalPrice || '',
        features: editingProduct.features,
        checkoutUrl: editingProduct.checkoutUrl || '',
        youtubeUrl: editingProduct.youtubeUrl || '',
        isPopular: editingProduct.isPopular,
        image: editingProduct.image || null
      });
    } else {
      resetForm();
    }
  }, [editingProduct, isOpen]);

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      features: [''],
      checkoutUrl: '',
      youtubeUrl: '',
      isPopular: false,
      image: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));
  };

  const removeFeature = (index) => {
    if (formData.features.length > 1) {
      const newFeatures = formData.features.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, features: newFeatures }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, image: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      toast({ title: "Error", description: "Nama produk dan harga wajib diisi!", variant: "destructive" });
      return;
    }
    const filteredFeatures = formData.features.filter(feature => feature.trim() !== '');
    if (filteredFeatures.length === 0) {
      toast({ title: "Error", description: "Minimal satu fitur harus diisi!", variant: "destructive" });
      return;
    }
    onFormSubmit({ ...formData, features: filteredFeatures });
    handleDialogClose();
  };

  const handleDialogClose = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">
            {editingProduct ? 'Edit Pelatihan' : 'Tambah Pelatihan Baru'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-white">Nama Pelatihan</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Contoh: Kelas Digital Marketing" className="bg-gray-800 border-gray-600 text-white" required />
            </div>
            <div>
              <Label htmlFor="price" className="text-white">Harga</Label>
              <Input id="price" name="price" value={formData.price} onChange={handleInputChange} placeholder="Contoh: Rp 499.000" className="bg-gray-800 border-gray-600 text-white" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="originalPrice" className="text-white">Harga Asli (Opsional)</Label>
              <Input id="originalPrice" name="originalPrice" value={formData.originalPrice} onChange={handleInputChange} placeholder="Contoh: Rp 699.000" className="bg-gray-800 border-gray-600 text-white" />
            </div>
            <div>
              <Label htmlFor="checkoutUrl" className="text-white">URL Checkout</Label>
              <Input id="checkoutUrl" name="checkoutUrl" value={formData.checkoutUrl} onChange={handleInputChange} placeholder="https://checkout.example.com" className="bg-gray-800 border-gray-600 text-white" />
            </div>
          </div>
           <div>
              <Label htmlFor="youtubeUrl" className="text-white">Link Materi YouTube</Label>
              <div className="relative">
                <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="youtubeUrl" name="youtubeUrl" value={formData.youtubeUrl} onChange={handleInputChange} placeholder="https://youtube.com/watch?v=..." className="bg-gray-800 border-gray-600 text-white pl-10" />
              </div>
            </div>
          <div>
            <Label className="text-white">Fitur Pelatihan</Label>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <Input value={feature} onChange={(e) => handleFeatureChange(index, e.target.value)} placeholder={`Fitur ${index + 1}`} className="bg-gray-800 border-gray-600 text-white" />
                {formData.features.length > 1 && (
                  <Button type="button" variant="outline" size="icon" onClick={() => removeFeature(index)} className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addFeature} className="mt-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Fitur
            </Button>
          </div>
          <div>
            <Label htmlFor="image" className="text-white">Upload Gambar (Opsional)</Label>
            <div className="mt-2">
              <input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <Button type="button" variant="outline" onClick={() => document.getElementById('image').click()} className="border-gray-600 text-white hover:bg-gray-700">
                <Upload className="w-4 h-4 mr-2" />
                Pilih Gambar
              </Button>
              {formData.image && (
                <div className="mt-4">
                  <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input id="isPopular" name="isPopular" type="checkbox" checked={formData.isPopular} onChange={handleInputChange} className="rounded border-gray-600" />
            <Label htmlFor="isPopular" className="text-white">Tandai sebagai pelatihan populer</Label>
          </div>
          <div className="flex gap-4 pt-4">
            <Button type="submit" className="btn-gradient text-white border-0 flex-1">
              <Save className="w-4 h-4 mr-2" />
              {editingProduct ? 'Update Pelatihan' : 'Simpan Pelatihan'}
            </Button>
            <Button type="button" variant="outline" onClick={handleDialogClose} className="border-gray-600 text-white hover:bg-gray-700">
              Batal
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;