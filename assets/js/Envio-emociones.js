// Aseguramos que todo el DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado y procesado."); // Para depuración
  
    // Selección de elementos del DOM usando las clases e IDs correctos
    const saveButton = document.querySelector('.save-buttonR');
    const emotionInput = document.querySelector('.emotion-inputR');
    const confirmationMessage = document.getElementById('confirmationMessageR');
  
    // Validamos que todos los elementos existen en el DOM
    if (!saveButton || !emotionInput || !confirmationMessage) {
      console.error("Error: No se encontraron los elementos necesarios.");
      return; // Detenemos la ejecución si falta algún elemento
    }
  
    // Evento de clic para guardar la respuesta
    saveButton.addEventListener('click', () => {
      const userResponse = emotionInput.value.trim(); // Elimina espacios innecesarios
      console.log("Respuesta del usuario:", userResponse); // Depuración
  
      if (userResponse) {
        try {
          // Guardamos la respuesta en localStorage
          localStorage.setItem('userEmotion', userResponse);
  
          // Mostramos un mensaje de confirmación
          confirmationMessage.classList.remove('hiddenR');
  
          // Limpiamos el área de texto
          emotionInput.value = '';
  
          // Ocultamos el mensaje después de 3 segundos
          setTimeout(() => {
            confirmationMessage.classList.add('hiddenR');
          }, 3000);
        } catch (error) {
          console.error("Error al guardar en localStorage:", error);
          alert("No se pudo guardar la respuesta. Inténtalo más tarde.");
        }
      } else {
        alert('Por favor, escribe una respuesta antes de guardar.');
      }
    });
  });