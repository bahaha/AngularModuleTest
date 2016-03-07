module.exports= function($scope, $state, TestService){
		console.log('enter controller_241')
		$scope.test = TestService.getTest()
	}
