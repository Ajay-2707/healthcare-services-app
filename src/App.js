import React, { useState } from 'react';
import ServiceList from './Components/ServiceList';
import ServiceForm from './Components/ServiceForm';

function App() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const deleteService = (serviceId) => {
    setServices(services.filter((service) => service.id !== serviceId));
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const editService = (service) => {
    setEditingService(service);
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editingService={editingService}
        setEditingService={setEditingService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        editService={editService}
      />
    </div>
  );
}

export default App;
