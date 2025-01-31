"use client";
import Layout from "@/components/details/Layout";
import SavedEquipmentComponent from "@/components/details/SavedEquipmentComponent";
import Footer from '@/components/homepage/footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '@/redux/reducers/equipmentReducer';
import { toast, ToastContainer } from 'react-toastify';


export default function SavedEquipment () {
 
    

    return (
      <div>
        <div className="bg-gray-100">
            <Layout>
                <SavedEquipmentComponent  />
            </Layout>
        </div>
      
        </div>
    )

}